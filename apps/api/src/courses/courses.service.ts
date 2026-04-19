import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EnrollmentStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto, PaginatedResult } from '../common';
import { CreateCourseDto, UpdateCourseDto } from './dto/course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}
  private readonly slotStatuses: EnrollmentStatus[] = [
    'PENDING',
    'APPROVED',
    'STUDYING',
  ];

  private async withAvailabilityStats<T extends { id: number; slots: number; availability: string }>(
    courses: T[],
  ) {
    if (!courses.length) return [];
    const counts = await Promise.all(
      courses.map(async (course) => {
        const occupied = await this.prisma.client.enrollment.count({
          where: {
            courseId: course.id,
            status: { in: this.slotStatuses },
          },
        });
        return [course.id, occupied] as const;
      }),
    );
    const countMap = new Map<number, number>(counts);
    return courses.map((course) => {
      const occupiedSlots = countMap.get(course.id) ?? 0;
      const availableSlots = Math.max((course.slots || 0) - occupiedSlots, 0);
      const effectiveAvailability =
        course.availability === 'CLOSED'
          ? 'CLOSED'
          : course.slots > 0 && availableSlots <= 0
            ? 'FULL'
            : course.availability;
      return {
        ...course,
        occupiedSlots,
        availableSlots,
        effectiveAvailability,
      };
    });
  }

  async create(dto: CreateCourseDto) {
    const existing = await this.prisma.client.course.findUnique({
      where: { code: dto.code },
    });
    if (existing) {
      throw new ConflictException(`Course with code '${dto.code}' already exists`);
    }

    return this.prisma.client.course.create({ data: dto });
  }

  async findAll(query: PaginationDto): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { code: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [rows, total] = await Promise.all([
      this.prisma.client.course.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        include: { _count: { select: { enrollments: true } } },
      }),
      this.prisma.client.course.count({ where }),
    ]);
    const data = await this.withAvailabilityStats(rows);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: number) {
    const course = await this.prisma.client.course.findUnique({
      where: { id },
      include: { _count: { select: { enrollments: true } } },
    });
    if (!course) throw new NotFoundException('ކްލާސް ނުފެނުނު');
    const [enriched] = await this.withAvailabilityStats([course]);
    return enriched;
  }

  async findAllPublic() {
    const rows = await this.prisma.client.course.findMany({
      where: { isActive: true },
      orderBy: { title: 'asc' },
      select: {
        id: true,
        title: true,
        code: true,
        duration: true,
        slots: true,
        monthlyFee: true,
        availability: true,
      },
    });
    return this.withAvailabilityStats(rows as any);
  }

  async update(id: number, dto: UpdateCourseDto) {
    await this.findOne(id);

    if (dto.code) {
      const existing = await this.prisma.client.course.findFirst({
        where: { code: dto.code, NOT: { id } },
      });
      if (existing) {
        throw new ConflictException(
          `Course with code '${dto.code}' already exists`,
        );
      }
    }

    return this.prisma.client.course.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.client.course.delete({ where: { id } });
  }
}
