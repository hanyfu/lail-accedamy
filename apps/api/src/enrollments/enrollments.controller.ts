import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PaginationDto } from '../common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { RequestWithUser } from '../common/interfaces/request-with-user';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto, UpdateEnrollmentDto } from './dto/enrollment.dto';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(
    private enrollmentsService: EnrollmentsService,
    private auditLogService: AuditLogService,
  ) {}

  @Post()
  async create(@Body() dto: CreateEnrollmentDto) {
    return this.enrollmentsService.create(dto);
  }

  @Get('lookup')
  lookup(
    @Query('idCardNo') idCardNo?: string,
    @Query('courseId') courseId?: string,
  ) {
    return this.enrollmentsService.lookupByIdCard({
      idCardNo,
      courseId: courseId ? parseInt(courseId, 10) : undefined,
    });
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findAll(
    @Query() query: PaginationDto,
    @Query('courseId') courseId?: string,
    @Query('status') status?: string,
    @Query('isArchived') isArchived?: string,
  ) {
    return this.enrollmentsService.findAll({
      ...query,
      status,
      courseId: courseId ? parseInt(courseId, 10) : undefined,
      isArchived:
        typeof isArchived === 'string'
          ? isArchived.toLowerCase() === 'true'
          : undefined,
    });
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateEnrollmentDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.enrollmentsService.update(parseInt(id, 10), dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'UPDATE',
      entity: 'Enrollment',
      entityId: id,
      details: JSON.stringify(dto),
    });
    return result;
  }
}
