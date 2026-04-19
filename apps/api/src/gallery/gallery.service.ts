import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto, PaginatedResult } from '../common';

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}

  async create(imageUrl: string, caption?: string) {
    return this.prisma.client.galleryImage.create({ data: { imageUrl, caption } });
  }

  async findAll(query: PaginationDto): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.caption = { contains: search, mode: 'insensitive' };
    }

    const [data, total] = await Promise.all([
      this.prisma.client.galleryImage.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.client.galleryImage.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async remove(id: number) {
    const found = await this.prisma.client.galleryImage.findUnique({ where: { id } });
    if (!found) throw new NotFoundException('ފޮޓޯ ނުފެނުނު');
    return this.prisma.client.galleryImage.delete({ where: { id } });
  }
}
