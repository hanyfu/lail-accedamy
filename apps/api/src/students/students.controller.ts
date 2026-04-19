import {
  Controller,
  Get,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { PaginationDto } from '../common';
import { RequestWithUser } from '../common/interfaces/request-with-user';

@Controller('students')
@UseGuards(JwtAuthGuard)
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get('me')
  @Roles('STUDENT', 'ADMIN')
  @UseGuards(RolesGuard)
  async getMyProfile(@Request() req: RequestWithUser) {
    return this.studentsService.findMyProfile(req.user.id);
  }

  @Get()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  findAll(
    @Query() query: PaginationDto,
    @Query('programId') programId?: string,
  ) {
    return this.studentsService.findAll({
      ...query,
      programId: programId ? parseInt(programId, 10) : undefined,
    });
  }

  @Get(':id')
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(parseInt(id, 10));
  }
}
