import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  SubmitApplicationDto,
  UpdateApplicationStatusDto,
} from './dto/applicant.dto';
import { PaginationDto, PaginatedResult } from '../common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ApplicantsService {
  constructor(private prisma: PrismaService) {}

  async submitApplication(dto: SubmitApplicationDto) {
    // Verify intake exists and is active
    const intake = await this.prisma.client.intake.findUnique({
      where: { id: dto.intakeId },
    });
    if (!intake) throw new NotFoundException('އިންޓޭކް ނުފެނުނު');
    if (intake.status !== 'ACTIVE') {
      throw new BadRequestException(
        'This intake is no longer accepting applications',
      );
    }
    if (new Date() > new Date(intake.applicationDeadline)) {
      throw new BadRequestException('މިހާރު ވަނީ ސުންގަޑި ހަމަވެފައި');
    }
    if (intake.programId !== dto.programId) {
      throw new BadRequestException(
        'Intake does not belong to selected program',
      );
    }

    // Check if email already registered
    const existingUser = await this.prisma.client.user.findUnique({
      where: { email: dto.email },
    });
    if (existingUser) {
      throw new ConflictException('މި އީމެއިލް މިހާރުވެސް ބޭނުންކުރެވެމުންދޭ');
    }

    // Create user and applicant in a transaction
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const result = await this.prisma.client.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: dto.email,
          name: `${dto.firstName} ${dto.lastName}`,
          password: hashedPassword,
          role: 'APPLICANT',
        },
      });

      const applicant = await tx.applicant.create({
        data: {
          firstName: dto.firstName,
          lastName: dto.lastName,
          email: dto.email,
          phone: dto.phone,
          dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
          address: dto.address,
          nationality: dto.nationality,
          previousEdu: dto.previousEdu,
          programId: dto.programId,
          intakeId: dto.intakeId,
          userId: user.id,
        },
        include: {
          program: true,
          intake: true,
        },
      });

      return applicant;
    });

    return result;
  }

  async findMyApplication(userId: number) {
    const applicant = await this.prisma.client.applicant.findFirst({
      where: { userId },
      include: {
        program: { include: { department: true } },
        intake: true,
        student: true,
      },
    });
    return applicant;
  }

  async findAll(
    query: PaginationDto & { status?: string; programId?: number },
  ): Promise<PaginatedResult<any>> {
    const { page = 1, limit = 20, search, status, programId } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (status) where.status = status;
    if (programId) where.programId = programId;
    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [data, total] = await Promise.all([
      this.prisma.client.applicant.findMany({
        where,
        include: {
          program: true,
          intake: true,
          user: { select: { id: true, email: true, name: true, role: true } },
          student: true,
        },
        orderBy: { submittedAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.client.applicant.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: number) {
    const applicant = await this.prisma.client.applicant.findUnique({
      where: { id },
      include: {
        program: { include: { department: true } },
        intake: true,
        user: { select: { id: true, email: true, name: true, role: true } },
        student: true,
      },
    });
    if (!applicant) throw new NotFoundException('އެޕްލިކަންޓް ނުފެނުނު');
    return applicant;
  }

  async updateStatus(
    id: number,
    dto: UpdateApplicationStatusDto,
    adminId: number,
  ) {
    const applicant = await this.findOne(id);

    if (applicant.status !== 'PENDING') {
      throw new BadRequestException(
        'މި އެޕްލިކޭޝަނަށް މިހާރު ވަނީ އަމަލުކުރެވިފައި',
      );
    }

    if (dto.status === 'APPROVED') {
      return this.approveApplication(applicant, adminId);
    }

    return this.prisma.client.applicant.update({
      where: { id },
      data: {
        status: 'REJECTED',
        rejectionNote: dto.rejectionNote,
      },
      include: {
        program: true,
        intake: true,
      },
    });
  }

  private async approveApplication(applicant: any, adminId: number) {
    // Generate student ID
    const year = new Date().getFullYear();
    const count = await this.prisma.client.student.count();
    const studentId = `STU-${year}-${String(count + 1).padStart(4, '0')}`;

    const result = await this.prisma.client.$transaction(async (tx) => {
      // Update applicant status
      const updated = await tx.applicant.update({
        where: { id: applicant.id },
        data: { status: 'APPROVED' },
      });

      // Create student record
      await tx.student.create({
        data: {
          studentId,
          applicantId: applicant.id,
          userId: applicant.userId!,
        },
      });

      // Update user role to STUDENT
      await tx.user.update({
        where: { id: applicant.userId! },
        data: { role: 'STUDENT' },
      });

      return updated;
    });

    return {
      ...result,
      studentId,
      message: 'Application approved. Student record created.',
    };
  }
}
