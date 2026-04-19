import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const PAGE_CONFIG: Record<string, string[]> = {
  home: ['hero', 'about', 'cta'],
  programs: ['header', 'content'],
  apply: ['header', 'form'],
  notices: ['header', 'list'],
  payment: ['header', 'instructions'],
};

@Injectable()
export class PageEditorService {
  constructor(private prisma: PrismaService) {}

  getPages() {
    return Object.keys(PAGE_CONFIG).map((pageKey) => ({
      pageKey,
      sections: PAGE_CONFIG[pageKey],
    }));
  }

  async getSections(pageKey: string) {
    const sections = PAGE_CONFIG[pageKey];
    if (!sections) throw new BadRequestException('ޕޭޖް ކީ ނުފެނުނު');

    const rows = await this.prisma.client.pageSection.findMany({
      where: { pageKey },
      orderBy: { sectionKey: 'asc' },
    });

    return sections.map((sectionKey) => {
      const existing = rows.find((row) => row.sectionKey === sectionKey);
      return {
        pageKey,
        sectionKey,
        fields: existing?.fields ?? {},
      };
    });
  }

  async updateSection(
    pageKey: string,
    sectionKey: string,
    fields: Record<string, any>,
  ) {
    const sections = PAGE_CONFIG[pageKey];
    if (!sections || !sections.includes(sectionKey)) {
      throw new BadRequestException('ޕޭޖް ނުވަތަ ސެކްޝަން ކީ ނުފެނުނު');
    }

    return this.prisma.client.pageSection.upsert({
      where: {
        pageKey_sectionKey: { pageKey, sectionKey },
      },
      create: { pageKey, sectionKey, fields },
      update: { fields },
    });
  }
}
