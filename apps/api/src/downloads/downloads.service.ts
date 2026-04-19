import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto, PaginatedResult } from '../common';
import { DownloadCategory } from '@prisma/client';

@Injectable()
export class DownloadsService {
  constructor(private prisma: PrismaService) {}

  async create(title: string, category: DownloadCategory, fileUrl: string) {
    return this.prisma.client.downloadItem.create({
      data: { title, category, fileUrl },
    });
  }

  async findAll(
    query: PaginationDto & { category?: DownloadCategory },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search, category } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (category) where.category = category;
    if (search) {
      where.title = { contains: search, mode: 'insensitive' };
    }

    const [data, total] = await Promise.all([
      this.prisma.client.downloadItem.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.client.downloadItem.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async remove(id: number) {
    const found = await this.prisma.client.downloadItem.findUnique({ where: { id } });
    if (!found) throw new NotFoundException('ޑައުންލޯޑް ނުފެނުނު');
    return this.prisma.client.downloadItem.delete({ where: { id } });
  }
}
