import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { EnrollmentStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto, PaginatedResult } from '../common';
import { CreateEnrollmentDto, UpdateEnrollmentDto } from './dto/enrollment.dto';

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}
  private readonly slotStatuses: EnrollmentStatus[] = [
    'PENDING',
    'APPROVED',
    'STUDYING',
  ];

  private calculateMonthlyBilled(enrollment: {
    classFee: number;
    billingStartDate: Date | null;
    billingStoppedAt: Date | null;
  }) {
    if (!enrollment.billingStartDate || enrollment.classFee <= 0) return 0;
    const start = enrollment.billingStartDate;
    const end = enrollment.billingStoppedAt ?? new Date();
    if (end < start) return 0;
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1;
    return Math.max(0, months) * enrollment.classFee;
  }

  private async syncEnrollmentBilling(id: number) {
    const enrollment = await this.prisma.client.enrollment.findUnique({
      where: { id },
      select: {
        id: true,
        status: true,
        classFee: true,
        totalBilled: true,
        billingStartDate: true,
        billingStoppedAt: true,
        startedAt: true,
        approvedAt: true,
        createdAt: true,
      },
    });
    if (!enrollment) return;
    const inferredStartDate =
      enrollment.billingStartDate ||
      ((enrollment.status === 'STUDYING' ||
        enrollment.status === 'COMPLETED' ||
        enrollment.status === 'DROPOUT') &&
      enrollment.classFee > 0
        ? enrollment.startedAt || enrollment.approvedAt || enrollment.createdAt
        : null);
    const expectedBilled = this.calculateMonthlyBilled({
      ...enrollment,
      billingStartDate: inferredStartDate,
    });

    if (
      Math.abs(expectedBilled - enrollment.totalBilled) > 0.001 ||
      (inferredStartDate &&
        (!enrollment.billingStartDate ||
          inferredStartDate.getTime() !== enrollment.billingStartDate.getTime()))
    ) {
      await this.prisma.client.enrollment.update({
        where: { id },
        data: {
          billingStartDate: inferredStartDate ?? undefined,
          totalBilled: expectedBilled,
        },
      });
    }
  }

  async create(dto: CreateEnrollmentDto) {
    const normalizedIdCardNo = dto.idCardNo.trim();
    let classFee = 0;
    if (dto.courseId) {
      const course = await this.prisma.client.course.findUnique({
        where: { id: dto.courseId },
      });
      if (!course) throw new NotFoundException('ކްލާސް ނުފެނުނު');
      if (course.availability === 'CLOSED') {
        throw new BadRequestException('މިވަގުތު މި ކްލާހަކަށް ނުވަދެވޭނެ');
      }
      if (course.availability === 'FULL') {
        throw new BadRequestException('މި ކްލާހުގެ ހުރިހާ ޖާގައެއް ފުރިފައި');
      }
      if (course.slots > 0) {
        const occupied = await this.prisma.client.enrollment.count({
          where: {
            courseId: course.id,
            status: { in: this.slotStatuses },
          },
        });
        if (occupied >= course.slots) {
          throw new BadRequestException('މި ކްލާހުގެ ހުރިހާ ޖާގައެއް ފުރިފައި');
        }
      }
      classFee = course.monthlyFee;
    }
    const existing = await this.prisma.client.enrollment.findFirst({
      where: { idCardNo: normalizedIdCardNo },
      select: { id: true },
    });
    if (existing) {
      throw new ConflictException('މި އައިޑީ ކާޑު ނަންބަރު މިހާރުވެސް އެބައޮތް');
    }

    return this.prisma.client.enrollment.create({
      data: {
        ...dto,
        classFee,
        idCardNo: normalizedIdCardNo,
        birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined,
      },
      include: { course: true },
    });
  }

  async lookupByIdCard(query: { idCardNo?: string; courseId?: number }) {
    const normalizedIdCardNo = query.idCardNo?.trim();
    if (!normalizedIdCardNo) {
      throw new BadRequestException('އައިޑީ ކާޑު ނަންބަރު ޖެއްސުން ލާޒިމް');
    }

    const enrollment = await this.prisma.client.enrollment.findFirst({
      where: {
        idCardNo: normalizedIdCardNo,
        ...(query.courseId ? { courseId: query.courseId } : {}),
      },
      include: { course: true },
    });

    if (!enrollment) {
      throw new NotFoundException('މި އައިޑީ ކާޑަށް އެންރޯލްމަންޓެއް ނުފެނުނު');
    }

    await this.syncEnrollmentBilling(enrollment.id);

    const refreshed = await this.prisma.client.enrollment.findUnique({
      where: { id: enrollment.id },
      include: { course: true },
    });
    if (!refreshed) {
      throw new NotFoundException('އެންރޯލްމަންޓް ނުފެނުނު');
    }

    const pendingFee = Math.max(refreshed.totalBilled - refreshed.totalPaid, 0);
    return {
      id: refreshed.id,
      idCardNo: refreshed.idCardNo,
      fullName: refreshed.fullName,
      courseId: refreshed.courseId,
      classFee: refreshed.classFee,
      totalBilled: refreshed.totalBilled,
      totalPaid: refreshed.totalPaid,
      pendingFee,
    };
  }

  async findAll(
    query: PaginationDto & {
      courseId?: number;
      status?: string;
      isArchived?: boolean;
    },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search, courseId, status, isArchived } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (courseId) where.courseId = courseId;
    if (typeof isArchived === 'boolean') where.isArchived = isArchived;
    if (status) {
      const statusList = status
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
      if (statusList.length === 1) {
        where.status = statusList[0];
      } else if (statusList.length > 1) {
        where.status = { in: statusList };
      }
    }
    if (search) {
      where.OR = [
        { idCardNo: { contains: search, mode: 'insensitive' } },
        { fullName: { contains: search, mode: 'insensitive' } },
        { parentName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
        { viberPhone: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [rows, total] = await Promise.all([
      this.prisma.client.enrollment.findMany({
        where,
        include: { course: true, payments: true },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.client.enrollment.count({ where }),
    ]);

    await Promise.all(rows.map((row) => this.syncEnrollmentBilling(row.id)));

    const data = await this.prisma.client.enrollment.findMany({
      where,
      include: { course: true, payments: true },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    });

    return {
      data: data.map((enrollment) => ({
        ...enrollment,
        pendingFee: Math.max(enrollment.totalBilled - enrollment.totalPaid, 0),
      })),
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async update(id: number, dto: UpdateEnrollmentDto) {
    const enrollment = await this.prisma.client.enrollment.findUnique({
      where: { id },
      include: { course: true },
    });
    if (!enrollment) throw new NotFoundException('އެންރޯލްމަންޓް ނުފެނުނު');

    let selectedCourseMonthlyFee = enrollment.course?.monthlyFee;
    if (dto.courseId) {
      const course = await this.prisma.client.course.findUnique({
        where: { id: dto.courseId },
      });
      if (!course) throw new NotFoundException('ކްލާސް ނުފެނުނު');
      selectedCourseMonthlyFee = course.monthlyFee;
    }

    if (dto.status === 'REJECTED' && !dto.rejectionNote?.trim()) {
      throw new BadRequestException('ނުގަބޫލުކުރާނަމަ ސަބަބު ލިޔަންވާނެ');
    }

    const nextStatus = dto.status ?? enrollment.status;
    const nextIdCardNo = dto.idCardNo ?? enrollment.idCardNo;
    if (
      (nextStatus === 'APPROVED' ||
        nextStatus === 'STUDYING' ||
        nextStatus === 'COMPLETED' ||
        nextStatus === 'DROPOUT') &&
      !nextIdCardNo
    ) {
      throw new BadRequestException(
        'ކުރިއަށް ދިއުމަށް އައިޑީ ކާޑު ނަންބަރު ބޭނުންވޭ',
      );
    }

    const shouldArchive = dto.isArchived === true && !enrollment.archivedAt;
    const shouldUnarchive = dto.isArchived === false;
    const shouldStartBilling =
      (dto.status === 'STUDYING' ||
        dto.status === 'COMPLETED' ||
        dto.status === 'DROPOUT') &&
      !enrollment.billingStartDate;
    const shouldStopBilling =
      (dto.status === 'COMPLETED' || dto.status === 'DROPOUT') &&
      !enrollment.billingStoppedAt;
    const shouldResumeBilling =
      dto.status === 'STUDYING' && !!enrollment.billingStoppedAt;

    if (dto.idCardNo && dto.idCardNo !== enrollment.idCardNo) {
      const existing = await this.prisma.client.enrollment.findFirst({
        where: { idCardNo: dto.idCardNo },
        select: { id: true },
      });
      if (existing) throw new ConflictException('މި އައިޑީ ކާޑު ނަންބަރު މިހާރުވެސް އެބައޮތް');
    }

    const shouldMarkApproved = dto.status === 'APPROVED' && !enrollment.approvedAt;
    const shouldMarkStudying = dto.status === 'STUDYING' && !enrollment.startedAt;
    const autoClassFee =
      dto.classFee ?? (dto.courseId ? selectedCourseMonthlyFee : undefined);

    const updated = await this.prisma.client.enrollment.update({
      where: { id },
      data: {
        courseId: dto.courseId,
        classFee: autoClassFee,
        idCardNo: dto.idCardNo,
        status: dto.status,
        isArchived: dto.isArchived,
        archivedAt: shouldUnarchive
          ? null
          : shouldArchive
            ? new Date()
            : enrollment.archivedAt,
        billingStartDate: shouldStartBilling ? new Date() : enrollment.billingStartDate,
        billingStoppedAt: shouldResumeBilling
          ? null
          : shouldStopBilling
            ? new Date()
            : enrollment.billingStoppedAt,
        rejectionNote: dto.status === 'REJECTED' ? dto.rejectionNote : null,
        approvedAt: shouldMarkApproved ? new Date() : undefined,
        startedAt: shouldMarkStudying ? new Date() : undefined,
      },
      include: { course: true, payments: true },
    });

    await this.syncEnrollmentBilling(updated.id);

    return this.prisma.client.enrollment.findUnique({
      where: { id: updated.id },
      include: { course: true, payments: true },
    });
  }
}
