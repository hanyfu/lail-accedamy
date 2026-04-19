import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuditLogService } from './audit-logs.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { PaginationDto } from '../common';

@Controller('audit-logs')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class AuditLogsController {
  constructor(private auditLogService: AuditLogService) {}

  @Get()
  findAll(
    @Query() query: PaginationDto,
    @Query('entity') entity?: string,
    @Query('userId') userId?: string,
  ) {
    return this.auditLogService.findAll({
      ...query,
      entity,
      userId: userId ? parseInt(userId, 10) : undefined,
    });
  }
}
