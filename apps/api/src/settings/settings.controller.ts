import {
  Body,
  Controller,
  Get,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { RequestWithUser } from '../common/interfaces/request-with-user';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { SettingsService } from './settings.service';
import { ChangePasswordDto, UpdateSiteSettingDto } from './dto/settings.dto';

@Controller('settings')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class SettingsController {
  constructor(
    private settingsService: SettingsService,
    private auditLogService: AuditLogService,
  ) {}

  @Get('site')
  getSiteSettings() {
    return this.settingsService.getSiteSettings();
  }

  @Put('site')
  async updateSiteSettings(
    @Body() dto: UpdateSiteSettingDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.settingsService.updateSiteSettings(dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'UPDATE',
      entity: 'SiteSetting',
      entityId: result.id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Put('change-password')
  async changePassword(
    @Body() dto: ChangePasswordDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.settingsService.changePassword(
      req.user.id,
      dto.currentPassword,
      dto.newPassword,
    );
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'CHANGE_PASSWORD',
      entity: 'User',
      entityId: req.user.id,
    });
    return result;
  }
}
