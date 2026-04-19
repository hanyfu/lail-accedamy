import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { PaginationDto, PaginatedResult } from '../common';

@Injectable()
export class ProgramsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProgramDto) {
    const existing = await this.prisma.client.program.findUnique({
      where: { code: dto.code },
    });
    if (existing) {
      throw new ConflictException(
        `Program with code '${dto.code}' already exists`,
      );
    }
    return this.prisma.client.program.create({
      data: dto,
      include: { department: true },
    });
  }

  async findAll(
    query: PaginationDto & { departmentId?: number },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search, departmentId } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (departmentId) where.departmentId = departmentId;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { code: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [data, total] = await Promise.all([
      this.prisma.client.program.findMany({
        where,
        include: {
          department: true,
          _count: { select: { intakes: true, applicants: true } },
        },
        orderBy: { name: 'asc' },
        skip,
        take: limit,
      }),
      this.prisma.client.program.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findAllPublic() {
    return this.prisma.client.program.findMany({
      include: {
        department: true,
        intakes: {
          where: {
            status: 'ACTIVE',
            applicationDeadline: { gte: new Date() },
          },
        },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: number) {
    const program = await this.prisma.client.program.findUnique({
      where: { id },
      include: {
        department: true,
        intakes: true,
        feeStructures: true,
      },
    });
    if (!program) throw new NotFoundException('ޕްރޮގްރާމް ނުފެނުނު');
    return program;
  }

  async update(id: number, dto: UpdateProgramDto) {
    await this.findOne(id);
    if (dto.code) {
      const existing = await this.prisma.client.program.findFirst({
        where: { code: dto.code, NOT: { id } },
      });
      if (existing) {
        throw new ConflictException(
          `Program with code '${dto.code}' already exists`,
        );
      }
    }
    return this.prisma.client.program.update({
      where: { id },
      data: dto,
      include: { department: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.client.program.delete({ where: { id } });
  }
}
