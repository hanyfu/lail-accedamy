import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateFeeStructureDto,
  UpdateFeeStructureDto,
  GenerateInvoiceDto,
  SubmitPaymentDto,
  VerifyPaymentDto,
} from './dto/finance.dto';
import { PaginationDto, PaginatedResult } from '../common';

@Injectable()
export class FinanceService {
  constructor(private prisma: PrismaService) {}

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

  private async syncEnrollmentBilling(
    enrollmentId: number,
    tx: any = this.prisma.client,
  ) {
    const enrollment = await tx.enrollment.findUnique({
      where: { id: enrollmentId },
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
    if (!enrollment) return null;
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
    const changed =
      Math.abs(expectedBilled - enrollment.totalBilled) > 0.001 ||
      (inferredStartDate &&
        (!enrollment.billingStartDate ||
          inferredStartDate.getTime() !== enrollment.billingStartDate.getTime()));

    if (!changed) {
      return enrollment;
    }
    return tx.enrollment.update({
      where: { id: enrollment.id },
      data: {
        billingStartDate: inferredStartDate ?? undefined,
        totalBilled: expectedBilled,
      },
    });
  }

  // ─── Fee Structures ───────────────────────────────────

  async createFeeStructure(dto: CreateFeeStructureDto) {
    return this.prisma.client.feeStructure.create({
      data: {
        name: dto.name,
        amount: dto.amount,
        currency: dto.currency || 'MVR',
        programId: dto.programId,
        intakeId: dto.intakeId,
      },
      include: { program: true, intake: true },
    });
  }

  async findAllFeeStructures(
    query: PaginationDto & { programId?: number },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search, programId } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (programId) where.programId = programId;
    if (search) {
      where.name = { contains: search, mode: 'insensitive' };
    }

    const [data, total] = await Promise.all([
      this.prisma.client.feeStructure.findMany({
        where,
        include: { program: true, intake: true },
        orderBy: { name: 'asc' },
        skip,
        take: limit,
      }),
      this.prisma.client.feeStructure.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOneFeeStructure(id: number) {
    const fs = await this.prisma.client.feeStructure.findUnique({
      where: { id },
      include: { program: true, intake: true },
    });
    if (!fs) throw new NotFoundException('ފީގެ މައުލޫމާތެއް ނުފެނުނު');
    return fs;
  }

  async updateFeeStructure(id: number, dto: UpdateFeeStructureDto) {
    await this.findOneFeeStructure(id);
    return this.prisma.client.feeStructure.update({
      where: { id },
      data: dto,
      include: { program: true, intake: true },
    });
  }

  async removeFeeStructure(id: number) {
    await this.findOneFeeStructure(id);
    return this.prisma.client.feeStructure.delete({ where: { id } });
  }

  // ─── Invoices ─────────────────────────────────────────

  async generateInvoice(dto: GenerateInvoiceDto) {
    const student = await this.prisma.client.student.findUnique({
      where: { id: dto.studentId },
    });
    if (!student) throw new NotFoundException('ދަރިވަރު ނުފެނުނު');

    const feeStructure = await this.prisma.client.feeStructure.findUnique({
      where: { id: dto.feeStructureId },
    });
    if (!feeStructure) throw new NotFoundException('ފީގެ މައުލޫމާތެއް ނުފެނުނު');

    // Generate invoice number
    const year = new Date().getFullYear();
    const count = await this.prisma.client.invoice.count();
    const invoiceNumber = `INV-${year}-${String(count + 1).padStart(4, '0')}`;

    return this.prisma.client.invoice.create({
      data: {
        invoiceNumber,
        studentId: dto.studentId,
        feeStructureId: dto.feeStructureId,
        amount: feeStructure.amount,
        dueDate: new Date(dto.dueDate),
      },
      include: {
        student: { include: { applicant: true } },
        feeStructure: true,
      },
    });
  }

  async findAllInvoices(
    query: PaginationDto & { status?: string; studentId?: number },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search, status, studentId } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (status) where.status = status;
    if (studentId) where.studentId = studentId;
    if (search) {
      where.invoiceNumber = { contains: search, mode: 'insensitive' };
    }

    const [data, total] = await Promise.all([
      this.prisma.client.invoice.findMany({
        where,
        include: {
          student: {
            include: {
              applicant: true,
              user: { select: { id: true, email: true, name: true } },
            },
          },
          feeStructure: true,
          payments: true,
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.client.invoice.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findMyInvoices(userId: number): Promise<any[]> {
    const student = await this.prisma.client.student.findFirst({
      where: { userId },
    });
    if (!student) return [];

    return this.prisma.client.invoice.findMany({
      where: { studentId: student.id },
      include: {
        feeStructure: true,
        payments: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOneInvoice(id: number) {
    const invoice = await this.prisma.client.invoice.findUnique({
      where: { id },
      include: {
        student: {
          include: {
            applicant: {
              include: { program: { include: { department: true } } },
            },
            user: { select: { id: true, email: true, name: true } },
          },
        },
        feeStructure: true,
        payments: true,
      },
    });
    if (!invoice) throw new NotFoundException('އިންވޮއިސް ނުފެނުނު');
    return invoice;
  }

  async deleteInvoice(id: number) {
    const invoice = await this.findOneInvoice(id);
    if (invoice.status === 'PAID') {
      throw new BadRequestException('ފައިސާ ދައްކާފައިވާ އިންވޮއިސްއެއް އުނިނުކުރެވޭނެ');
    }
    return this.prisma.client.invoice.delete({ where: { id } });
  }

  // ─── Payments ─────────────────────────────────────────

  async submitPayment(dto: SubmitPaymentDto, proofUrl?: string) {
    let invoice;
    let enrollment;
    if (dto.idCardNo) {
      enrollment = await this.prisma.client.enrollment.findFirst({
        where: {
          idCardNo: dto.idCardNo.trim(),
        },
        include: { course: true },
      });
    } else if (dto.invoiceId) {
      invoice = await this.prisma.client.invoice.findUnique({
        where: { id: dto.invoiceId },
      });
    } else if (dto.invoiceNumber) {
      invoice = await this.prisma.client.invoice.findUnique({
        where: { invoiceNumber: dto.invoiceNumber },
      });
    }

    if (!invoice && !enrollment) {
      throw new NotFoundException('އިންވޮއިސް ނުވަތަ ދަރިވަރުގެ މައުލޫމާތެއް ނުފެނުނު');
    }

    if (invoice) {
      if (invoice.status === 'PAID') {
        throw new BadRequestException('މި އިންވޮއިސްއަށް މިހާރުވަނީ ފައިސާ ދައްކާފައި');
      }

      const remainingBalance = invoice.amount - invoice.paidAmount;
      if (dto.amount > remainingBalance) {
        throw new BadRequestException(
          `ދައްކަންޖެހޭ އަދަދަށްވުރެ ގިނަ. ބާކީ އޮތީ: ${remainingBalance}`,
        );
      }
    }

    if (enrollment) {
      await this.syncEnrollmentBilling(enrollment.id);
      enrollment = await this.prisma.client.enrollment.findUnique({
        where: { id: enrollment.id },
        include: { course: true },
      });
      if (!enrollment) {
        throw new NotFoundException('ދަރިވަރުގެ އެންރޯލްމަންޓް ނުފެނުނު');
      }
      if (enrollment.isArchived) {
        throw new BadRequestException(
          'މި ދަރިވަރުވަނީ އާކައިވް ކުރެވިފައި. ފައިސާ ދެއްކުމުގެ ކުރިން އާކައިވްއިން ނަގަންވާނެ',
        );
      }
      if (
        !['APPROVED', 'STUDYING', 'COMPLETED', 'DROPOUT'].includes(
          enrollment.status,
        )
      ) {
        throw new BadRequestException(
          'މި ދަރިވަރަކީ މިވަގުތު ފީ ދައްކަންޖެހޭ ހާލަތެއްގައި ހުރި ކުއްޖެއް ނޫން',
        );
      }
      if (!dto.courseId || enrollment.courseId !== dto.courseId) {
        throw new BadRequestException(
          'ޚިޔާރުކުރި ކްލާހާއި ދަރިވަރުގެ ކްލާސް ދިމައެއް ނުވޭ',
        );
      }

      if (dto.studentName) {
        const normalizedInput = dto.studentName
          .trim()
          .replace(/\s+/g, ' ')
          .toLowerCase();
        const normalizedRecord = enrollment.fullName
          .trim()
          .replace(/\s+/g, ' ')
          .toLowerCase();
        if (normalizedInput !== normalizedRecord) {
          throw new BadRequestException(
            'ދަރިވަރުގެ ނަން އައިޑީ ކާޑާ ދިމައެއް ނުވޭ',
          );
        }
      }

      const pending = Math.max(enrollment.totalBilled - enrollment.totalPaid, 0);
      if (pending <= 0) {
        throw new BadRequestException('މި ދަރިވަރު ދައްކަންޖެހޭ ފީއެއް ނެތް');
      }
      if (dto.amount > pending) {
        throw new BadRequestException(
          `ދައްކަންޖެހޭ އަދަދަށްވުރެ ގިނަ. ބާކީ އޮތީ: ${pending}`,
        );
      }
    }

    return this.prisma.client.payment.create({
      data: {
        invoiceId: invoice?.id,
        enrollmentId: enrollment?.id,
        amount: dto.amount,
        method: dto.method,
        reference:
          dto.reference ||
          (enrollment
            ? `${enrollment.idCardNo} | ${enrollment.fullName} | ${enrollment.course?.title || 'Class'}`
            : undefined),
        proofUrl,
      },
      include: {
        invoice: {
          include: {
            feeStructure: true,
            student: { include: { applicant: true } },
          },
        },
        enrollment: { include: { course: true } },
      },
    });
  }

  async findAllPayments(
    query: PaginationDto & { status?: string; invoiceId?: number },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search, status, invoiceId } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (status) where.status = status;
    if (invoiceId) where.invoiceId = invoiceId;
    if (search) {
      where.OR = [
        { reference: { contains: search, mode: 'insensitive' } },
        {
          invoice: { invoiceNumber: { contains: search, mode: 'insensitive' } },
        },
        {
          enrollment: { fullName: { contains: search, mode: 'insensitive' } },
        },
        {
          enrollment: { idCardNo: { contains: search, mode: 'insensitive' } },
        },
      ];
    }

    const [data, total] = await Promise.all([
      this.prisma.client.payment.findMany({
        where,
        include: {
          invoice: {
            include: {
              student: {
                include: {
                  applicant: true,
                  user: { select: { id: true, email: true, name: true } },
                },
              },
              feeStructure: true,
            },
          },
          enrollment: { include: { course: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.client.payment.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async verifyPayment(id: number, dto: VerifyPaymentDto) {
    const payment = await this.prisma.client.payment.findUnique({
      where: { id },
      include: { invoice: true, enrollment: true },
    });
    if (!payment) throw new NotFoundException('ފައިސާގެ މައުލޫމާތެއް ނުފެނުނު');
    if (payment.status !== 'SUBMITTED') {
      throw new BadRequestException('މި ފައިސާ މިހާރު ވަނީ ޕްރޮސެސް ކުރެވިފައި');
    }

    if (dto.status === 'VERIFIED' && payment.invoice) {
      return this.prisma.client.$transaction(async (tx) => {
        // Update payment
        const updated = await tx.payment.update({
          where: { id },
          data: {
            status: 'VERIFIED',
            notes: dto.notes,
            verifiedAt: new Date(),
          },
        });

        // Update invoice paid amount and status
        const invoice = payment.invoice!;
        const newPaidAmount = invoice.paidAmount + payment.amount;
        let newStatus: string = invoice.status;

        if (newPaidAmount >= invoice.amount) {
          newStatus = 'PAID';
        } else if (newPaidAmount > 0) {
          newStatus = 'PARTIAL';
        }

        await tx.invoice.update({
          where: { id: invoice.id },
          data: {
            paidAmount: newPaidAmount,
            status: newStatus as any,
          },
        });

        return updated;
      });
    }

    if (dto.status === 'VERIFIED' && payment.enrollment) {
      return this.prisma.client.$transaction(async (tx) => {
        await this.syncEnrollmentBilling(payment.enrollment!.id, tx);

        const updated = await tx.payment.update({
          where: { id },
          data: {
            status: 'VERIFIED',
            notes: dto.notes,
            verifiedAt: new Date(),
          },
        });

        const enrollment = payment.enrollment!;
        const newTotalPaid = enrollment.totalPaid + payment.amount;
        const nextStatus =
          enrollment.status === 'APPROVED' ? 'STUDYING' : enrollment.status;

        await tx.enrollment.update({
          where: { id: enrollment.id },
          data: {
            totalPaid: newTotalPaid,
            status: nextStatus,
            startedAt:
              nextStatus === 'STUDYING' && !enrollment.startedAt
                ? new Date()
                : enrollment.startedAt,
          },
        });

        return updated;
      });
    }

    return this.prisma.client.payment.update({
      where: { id },
      data: {
        status: 'REJECTED',
        notes: dto.notes,
      },
    });
  }

  // ─── Reports ──────────────────────────────────────────

  async getFinanceSummary() {
    const [totalInvoiced, totalCollected, pendingPayments, overdueInvoices] =
      await Promise.all([
        this.prisma.client.invoice.aggregate({ _sum: { amount: true } }),
        this.prisma.client.invoice.aggregate({ _sum: { paidAmount: true } }),
        this.prisma.client.payment.count({ where: { status: 'SUBMITTED' } }),
        this.prisma.client.invoice.count({
          where: {
            status: { in: ['PENDING', 'PARTIAL'] },
            dueDate: { lt: new Date() },
          },
        }),
      ]);

    return {
      totalInvoiced: totalInvoiced._sum.amount || 0,
      totalCollected: totalCollected._sum.paidAmount || 0,
      outstanding:
        (totalInvoiced._sum.amount || 0) -
        (totalCollected._sum.paidAmount || 0),
      pendingPayments,
      overdueInvoices,
    };
  }

  async getDashboardStats() {
    const [
      totalApplicants,
      pendingApplicants,
      totalStudents,
      totalInvoices,
      pendingPayments,
      totalDepartments,
      totalPrograms,
    ] = await Promise.all([
      this.prisma.client.applicant.count(),
      this.prisma.client.applicant.count({ where: { status: 'PENDING' } }),
      this.prisma.client.student.count(),
      this.prisma.client.invoice.count(),
      this.prisma.client.payment.count({ where: { status: 'SUBMITTED' } }),
      this.prisma.client.department.count(),
      this.prisma.client.program.count(),
    ]);

    const financeSummary = await this.getFinanceSummary();

    return {
      totalApplicants,
      pendingApplicants,
      totalStudents,
      totalInvoices,
      totalDepartments,
      totalPrograms,
      ...financeSummary,
    };
  }
}
