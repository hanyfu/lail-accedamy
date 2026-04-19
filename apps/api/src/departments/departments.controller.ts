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
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { PaginationDto } from '../common';
import { RequestWithUser } from '../common/interfaces/request-with-user';

@Controller('departments')
export class DepartmentsController {
  constructor(
    private departmentsService: DepartmentsService,
    private auditLogService: AuditLogService,
  ) {}

  @Get()
  findAll(@Query() query: PaginationDto) {
    return this.departmentsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(parseInt(id, 10));
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async create(@Body() dto: CreateDepartmentDto, @Request() req: RequestWithUser) {
    const result = await this.departmentsService.create(dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'CREATE',
      entity: 'Department',
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
    @Body() dto: UpdateDepartmentDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.departmentsService.update(parseInt(id, 10), dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'UPDATE',
      entity: 'Department',
      entityId: id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    const result = await this.departmentsService.remove(parseInt(id, 10));
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'DELETE',
      entity: 'Department',
      entityId: id,
    });
    return result;
  }
}
