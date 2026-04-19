import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIntakeDto, UpdateIntakeDto } from './dto/intake.dto';
import { PaginationDto, PaginatedResult } from '../common';

@Injectable()
export class IntakesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateIntakeDto) {
    return this.prisma.client.intake.create({
      data: {
        name: dto.name,
        programId: dto.programId,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        applicationDeadline: new Date(dto.applicationDeadline),
        maxCapacity: dto.maxCapacity || 100,
      },
      include: { program: true },
    });
  }

  async findAll(
    query: PaginationDto & { programId?: number; status?: string },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search, programId, status } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (programId) where.programId = programId;
    if (status) where.status = status;
    if (search) {
      where.OR = [{ name: { contains: search, mode: 'insensitive' } }];
    }

    const [data, total] = await Promise.all([
      this.prisma.client.intake.findMany({
        where,
        include: {
          program: { include: { department: true } },
          _count: { select: { applicants: true } },
        },
        orderBy: { startDate: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.client.intake.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findActive() {
    return this.prisma.client.intake.findMany({
      where: {
        status: 'ACTIVE',
        applicationDeadline: { gte: new Date() },
      },
      include: {
        program: { include: { department: true } },
      },
      orderBy: { applicationDeadline: 'asc' },
    });
  }

  async findOne(id: number) {
    const intake = await this.prisma.client.intake.findUnique({
      where: { id },
      include: {
        program: { include: { department: true } },
        applicants: true,
        feeStructures: true,
      },
    });
    if (!intake) throw new NotFoundException('އިންޓޭކް ނުފެނުނު');
    return intake;
  }

  async update(id: number, dto: UpdateIntakeDto) {
    await this.findOne(id);
    const data: any = {};
    if (dto.name) data.name = dto.name;
    if (dto.startDate) data.startDate = new Date(dto.startDate);
    if (dto.endDate) data.endDate = new Date(dto.endDate);
    if (dto.applicationDeadline)
      data.applicationDeadline = new Date(dto.applicationDeadline);
    if (dto.maxCapacity) data.maxCapacity = dto.maxCapacity;
    if (dto.status) data.status = dto.status;

    return this.prisma.client.intake.update({
      where: { id },
      data,
      include: { program: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.client.intake.delete({ where: { id } });
  }
}
