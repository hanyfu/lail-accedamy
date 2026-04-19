import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationDto, PaginatedResult } from '../common';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async findMyProfile(userId: number) {
    const student = await this.prisma.client.student.findFirst({
      where: { userId },
      include: {
        applicant: {
          include: {
            program: { include: { department: true } },
            intake: true,
          },
        },
        invoices: {
          include: {
            feeStructure: true,
            payments: true,
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });
    return student;
  }

  async findAll(
    query: PaginationDto & { programId?: number },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search, programId } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (programId) {
      where.applicant = { programId };
    }
    if (search) {
      where.OR = [
        { studentId: { contains: search, mode: 'insensitive' } },
        { applicant: { firstName: { contains: search, mode: 'insensitive' } } },
        { applicant: { lastName: { contains: search, mode: 'insensitive' } } },
        { applicant: { email: { contains: search, mode: 'insensitive' } } },
      ];
    }

    const [data, total] = await Promise.all([
      this.prisma.client.student.findMany({
        where,
        include: {
          applicant: {
            include: {
              program: { include: { department: true } },
              intake: true,
            },
          },
          user: {
            select: {
              id: true,
              email: true,
              name: true,
              role: true,
              status: true,
            },
          },
          _count: { select: { invoices: true } },
          invoices: {
            select: {
              amount: true,
              paidAmount: true,
            },
          },
        },
        orderBy: { enrolledAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.client.student.count({ where }),
    ]);

    return {
      data: data.map((student) => {
        const totalFees = student.invoices.reduce(
          (sum, invoice) => sum + invoice.amount,
          0,
        );
        const totalPaid = student.invoices.reduce(
          (sum, invoice) => sum + invoice.paidAmount,
          0,
        );
        return {
          ...student,
          totalFees,
          totalPaid,
          pendingFees: Math.max(totalFees - totalPaid, 0),
        };
      }),
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: number) {
    const student = await this.prisma.client.student.findUnique({
      where: { id },
      include: {
        applicant: {
          include: {
            program: { include: { department: true } },
            intake: true,
          },
        },
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            status: true,
          },
        },
        invoices: {
          include: {
            feeStructure: true,
            payments: true,
          },
        },
      },
    });
    if (!student) throw new NotFoundException('ކިޔަވާކުއްޖާ ނުފެނުނު');
    return student;
  }
}
