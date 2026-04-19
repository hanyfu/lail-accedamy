import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNoticeDto, UpdateNoticeDto } from './dto/notice.dto';
import { PaginationDto, PaginatedResult } from '../common';

@Injectable()
export class NoticesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateNoticeDto) {
    return this.prisma.client.notice.create({
      data: {
        title: dto.title,
        content: dto.content,
        audience: (dto.audience as any) || 'ALL',
        programId: dto.programId,
        intakeId: dto.intakeId,
        isPublished: dto.isPublished ?? true,
        expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : undefined,
      },
      include: { program: true, intake: true },
    });
  }

  async findAll(
    query: PaginationDto & { audience?: string },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search, audience } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (audience) where.audience = audience;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [data, total] = await Promise.all([
      this.prisma.client.notice.findMany({
        where,
        include: { program: true, intake: true },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.client.notice.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findPublic(audience?: string) {
    const where: any = {
      isPublished: true,
      OR: [{ expiryDate: null }, { expiryDate: { gte: new Date() } }],
    };
    if (audience && audience !== 'ALL') {
      where.audience = { in: [audience, 'ALL'] };
    }

    return this.prisma.client.notice.findMany({
      where,
      include: { program: true, intake: true },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }

  async findOne(id: number) {
    const notice = await this.prisma.client.notice.findUnique({
      where: { id },
      include: { program: true, intake: true },
    });
    if (!notice) throw new NotFoundException('ނޯޓިސް ނުފެނުނު');
    return notice;
  }

  async update(id: number, dto: UpdateNoticeDto) {
    await this.findOne(id);
    const data: any = { ...dto };
    if (dto.expiryDate) data.expiryDate = new Date(dto.expiryDate);
    return this.prisma.client.notice.update({
      where: { id },
      data,
      include: { program: true, intake: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.client.notice.delete({ where: { id } });
  }
}
