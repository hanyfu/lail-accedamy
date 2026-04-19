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
import { IntakesService } from './intakes.service';
import { CreateIntakeDto, UpdateIntakeDto } from './dto/intake.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { PaginationDto } from '../common';
import { RequestWithUser } from '../common/interfaces/request-with-user';

@Controller('intakes')
export class IntakesController {
  constructor(
    private intakesService: IntakesService,
    private auditLogService: AuditLogService,
  ) {}

  @Get()
  findAll(
    @Query() query: PaginationDto,
    @Query('programId') programId?: string,
    @Query('status') status?: string,
  ) {
    return this.intakesService.findAll({
      ...query,
      programId: programId ? parseInt(programId, 10) : undefined,
      status,
    });
  }

  @Get('active')
  findActive() {
    return this.intakesService.findActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intakesService.findOne(parseInt(id, 10));
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async create(@Body() dto: CreateIntakeDto, @Request() req: RequestWithUser) {
    const result = await this.intakesService.create(dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'CREATE',
      entity: 'Intake',
      entityId: result.id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateIntakeDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.intakesService.update(parseInt(id, 10), dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'UPDATE',
      entity: 'Intake',
      entityId: id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    const result = await this.intakesService.remove(parseInt(id, 10));
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'DELETE',
      entity: 'Intake',
      entityId: id,
    });
    return result;
  }
}
