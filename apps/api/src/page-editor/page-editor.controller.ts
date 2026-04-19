import { Body, Controller, Get, Param, Put, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { RequestWithUser } from '../common/interfaces/request-with-user';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { PageEditorService } from './page-editor.service';
import { UpdatePageSectionDto } from './dto/page-editor.dto';

@Controller('page-editor')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class PageEditorController {
  constructor(
    private pageEditorService: PageEditorService,
    private auditLogService: AuditLogService,
  ) {}

  @Get('pages')
  getPages() {
    return this.pageEditorService.getPages();
  }

  @Get(':pageKey/sections')
  getSections(@Param('pageKey') pageKey: string) {
    return this.pageEditorService.getSections(pageKey);
  }

  @Put(':pageKey/sections/:sectionKey')
  async updateSection(
    @Param('pageKey') pageKey: string,
    @Param('sectionKey') sectionKey: string,
    @Body() dto: UpdatePageSectionDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.pageEditorService.updateSection(
      pageKey,
      sectionKey,
      dto.fields,
    );
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'UPDATE',
      entity: 'PageSection',
      entityId: result.id,
      details: JSON.stringify({ pageKey, sectionKey, fields: dto.fields }),
    });
    return result;
  }
}
