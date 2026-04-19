import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { NoticesService } from './notices.service';
import { CreateNoticeDto, UpdateNoticeDto } from './dto/notice.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { PaginationDto } from '../common';
import { RequestWithUser } from '../common/interfaces/request-with-user';

@Controller('notices')
export class NoticesController {
  constructor(
    private noticesService: NoticesService,
    private auditLogService: AuditLogService,
  ) {}

  // Public endpoint
  @Get('public')
  findPublic(@Query('audience') audience?: string) {
    return this.noticesService.findPublic(audience);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findAll(@Query() query: PaginationDto, @Query('audience') audience?: string) {
    return this.noticesService.findAll({ ...query, audience });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticesService.findOne(parseInt(id, 10));
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async create(@Body() dto: CreateNoticeDto, @Request() req: RequestWithUser) {
    const result = await this.noticesService.create(dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'CREATE',
      entity: 'Notice',
      entityId: result.id,
      details: JSON.stringify({ title: dto.title, audience: dto.audience }),
    });
    return result;
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateNoticeDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.noticesService.update(parseInt(id, 10), dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'UPDATE',
      entity: 'Notice',
      entityId: id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    const result = await this.noticesService.remove(parseInt(id, 10));
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'DELETE',
      entity: 'Notice',
      entityId: id,
    });
    return result;
  }
}
