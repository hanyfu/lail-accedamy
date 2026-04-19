import { Body, Controller, Get, Put, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { RequestWithUser } from '../common/interfaces/request-with-user';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { AnnouncementsService } from './announcements.service';
import { UpdateAnnouncementDto } from './dto/announcement.dto';

@Controller('announcements')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class AnnouncementsController {
  constructor(
    private announcementsService: AnnouncementsService,
    private auditLogService: AuditLogService,
  ) {}

  @Get()
  getConfig() {
    return this.announcementsService.getConfig();
  }

  @Put()
  async updateConfig(
    @Body() dto: UpdateAnnouncementDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.announcementsService.updateConfig(dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'UPDATE',
      entity: 'Announcement',
      entityId: result.id,
      details: JSON.stringify(dto),
    });
    return result;
  }
}
