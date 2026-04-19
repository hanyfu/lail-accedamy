import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApplicantsService } from './applicants.service';
import {
  SubmitApplicationDto,
  UpdateApplicationStatusDto,
} from './dto/applicant.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { PaginationDto } from '../common';
import { RequestWithUser } from '../common/interfaces/request-with-user';

@Controller('applicants')
export class ApplicantsController {
  constructor(
    private applicantsService: ApplicantsService,
    private auditLogService: AuditLogService,
  ) {}

  // Public endpoint - submit application
  @Post('apply')
  async submitApplication(@Body() dto: SubmitApplicationDto) {
    return this.applicantsService.submitApplication(dto);
  }

  // Applicant - view own application
  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getMyApplication(@Request() req: RequestWithUser) {
    return this.applicantsService.findMyApplication(req.user.id);
  }

  // Admin - list all applicants with filtering
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findAll(
    @Query() query: PaginationDto,
    @Query('status') status?: string,
    @Query('programId') programId?: string,
  ) {
    return this.applicantsService.findAll({
      ...query,
      status,
      programId: programId ? parseInt(programId, 10) : undefined,
    });
  }

  // Admin - view single applicant
  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findOne(@Param('id') id: string) {
    return this.applicantsService.findOne(parseInt(id, 10));
  }

  // Admin - approve or reject
  @Put(':id/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateApplicationStatusDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.applicantsService.updateStatus(
      parseInt(id, 10),
      dto,
      req.user.id,
    );
    await this.auditLogService.log({
      userId: req.user.id,
      action: dto.status === 'APPROVED' ? 'APPROVE' : 'REJECT',
      entity: 'Applicant',
      entityId: id,
      details: JSON.stringify(dto),
    });
    return result;
  }
}
