import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateAnnouncementDto } from './dto/announcement.dto';

@Injectable()
export class AnnouncementsService {
  constructor(private prisma: PrismaService) {}
  private readonly announcementNoticeTitle = 'Website Announcement';

  private splitAnnouncementContent(content: string) {
    const marker = '\n\nMore info: ';
    const idx = content.lastIndexOf(marker);
    if (idx === -1) return { text: content, link: '' };
    return {
      text: content.slice(0, idx).trim(),
      link: content.slice(idx + marker.length).trim(),
    };
  }

  async getConfig() {
    const [config, primaryNotice, fallbackNotice] = await Promise.all([
      this.prisma.client.announcement.findFirst({ orderBy: { id: 'asc' } }),
      this.prisma.client.notice.findFirst({
        where: {
          title: this.announcementNoticeTitle,
        },
        orderBy: { updatedAt: 'desc' },
      }),
      this.prisma.client.notice.findFirst({
        where: {
          isPublished: true,
        },
        orderBy: { updatedAt: 'desc' },
      }),
    ]);
    const notice = primaryNotice ?? fallbackNotice;
    const parsed = notice?.content ? this.splitAnnouncementContent(notice.content) : null;

    if (config) {
      return {
        ...config,
        isEnabled: notice?.isPublished ?? config.isEnabled,
        text: parsed?.text ?? notice?.content ?? config.text,
        link: parsed?.link ?? config.link,
        audience: notice?.audience ?? 'ALL',
      };
    }

    if (notice) {
      return this.prisma.client.announcement.create({
        data: {
          isEnabled: notice.isPublished,
          text: parsed?.text ?? notice.content,
          link: parsed?.link ?? '',
        },
      });
    }

    return this.prisma.client.announcement.create({
      data: { isEnabled: false, text: '', link: '' },
    });
  }

  async updateConfig(dto: UpdateAnnouncementDto) {
    const audience = dto.audience || 'ALL';
    const { audience: _ignoredAudience, ...announcementData } = dto;
    const current = await this.prisma.client.announcement.findFirst({
      orderBy: { id: 'asc' },
    });
    const config = current
      ? await this.prisma.client.announcement.update({
          where: { id: current.id },
          data: announcementData,
        })
      : await this.prisma.client.announcement.create({
          data: announcementData,
        });

    const existingNotice = await this.prisma.client.notice.findFirst({
      where: {
        title: this.announcementNoticeTitle,
      },
      orderBy: { id: 'asc' },
    });
    const fallbackNotice = await this.prisma.client.notice.findFirst({
      where: { audience },
      orderBy: { updatedAt: 'desc' },
    });

    const baseText = dto.text?.trim() || '';
    const linkText = dto.link?.trim() || '';
    const noticeContent = linkText
      ? `${baseText}\n\nMore info: ${linkText}`.trim()
      : baseText;
    if (existingNotice || fallbackNotice) {
      const targetNotice = existingNotice || fallbackNotice;
      await this.prisma.client.notice.update({
        where: { id: targetNotice!.id },
        data: {
          title: existingNotice
            ? this.announcementNoticeTitle
            : targetNotice!.title || this.announcementNoticeTitle,
          content: noticeContent || targetNotice!.content,
          isPublished: dto.isEnabled,
          audience,
          expiryDate: null,
        },
      });
    } else if (noticeContent) {
      await this.prisma.client.notice.create({
        data: {
          title: this.announcementNoticeTitle,
          content: noticeContent,
          audience,
          isPublished: dto.isEnabled,
        },
      });
    }

    return {
      ...config,
      text: noticeContent || config.text,
      audience,
    };
  }
}
