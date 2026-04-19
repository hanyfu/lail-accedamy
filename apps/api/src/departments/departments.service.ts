import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PaginationDto, PaginatedResult } from '../common';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateDepartmentDto) {
    const existing = await this.prisma.client.department.findUnique({
      where: { code: dto.code },
    });
    if (existing) {
      throw new ConflictException(
        `Department with code '${dto.code}' already exists`,
      );
    }
    return this.prisma.client.department.create({ data: dto });
  }

  async findAll(query: PaginationDto): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { code: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [data, total] = await Promise.all([
      this.prisma.client.department.findMany({
        where,
        include: { _count: { select: { programs: true } } },
        orderBy: { name: 'asc' },
        skip,
        take: limit,
      }),
      this.prisma.client.department.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: number) {
    const dept = await this.prisma.client.department.findUnique({
      where: { id },
      include: { programs: true },
    });
    if (!dept) throw new NotFoundException('ޑިޕާޓްމަންޓް ނުފެނުނު');
    return dept;
  }

  async update(id: number, dto: UpdateDepartmentDto) {
    await this.findOne(id);
    if (dto.code) {
      const existing = await this.prisma.client.department.findFirst({
        where: { code: dto.code, NOT: { id } },
      });
      if (existing) {
        throw new ConflictException(
          `Department with code '${dto.code}' already exists`,
        );
      }
    }
    return this.prisma.client.department.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.client.department.delete({ where: { id } });
  }
}
