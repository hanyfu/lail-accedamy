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
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { PaginationDto } from '../common';
import { RequestWithUser } from '../common/interfaces/request-with-user';

@Controller('programs')
export class ProgramsController {
  constructor(
    private programsService: ProgramsService,
    private auditLogService: AuditLogService,
  ) {}

  @Get()
  findAll(
    @Query() query: PaginationDto,
    @Query('departmentId') departmentId?: string,
  ) {
    return this.programsService.findAll({
      ...query,
      departmentId: departmentId ? parseInt(departmentId, 10) : undefined,
    });
  }

  @Get('public')
  findAllPublic() {
    return this.programsService.findAllPublic();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programsService.findOne(parseInt(id, 10));
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async create(@Body() dto: CreateProgramDto, @Request() req: RequestWithUser) {
    const result = await this.programsService.create(dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'CREATE',
      entity: 'Program',
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
    @Body() dto: UpdateProgramDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.programsService.update(parseInt(id, 10), dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'UPDATE',
      entity: 'Program',
      entityId: id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    const result = await this.programsService.remove(parseInt(id, 10));
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'DELETE',
      entity: 'Program',
      entityId: id,
    });
    return result;
  }
}
