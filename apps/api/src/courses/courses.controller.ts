import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
import { CoursesService } from './courses.service';
import { CreateCourseDto, UpdateCourseDto } from './dto/course.dto';

@Controller('courses')
export class CoursesController {
  constructor(
    private coursesService: CoursesService,
    private auditLogService: AuditLogService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findAll(@Query() query: PaginationDto) {
    return this.coursesService.findAll(query);
  }

  @Get('public')
  findAllPublic() {
    return this.coursesService.findAllPublic();
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async create(@Body() dto: CreateCourseDto, @Request() req: RequestWithUser) {
    const result = await this.coursesService.create(dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'CREATE',
      entity: 'Course',
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
    @Body() dto: UpdateCourseDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.coursesService.update(parseInt(id, 10), dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'UPDATE',
      entity: 'Course',
      entityId: id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    const result = await this.coursesService.remove(parseInt(id, 10));
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'DELETE',
      entity: 'Course',
      entityId: id,
    });
    return result;
  }
}
