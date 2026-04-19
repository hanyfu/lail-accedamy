import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { randomUUID } from 'crypto';
import { extname, join } from 'path';
import { DownloadCategory } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { RequestWithUser } from '../common/interfaces/request-with-user';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { PaginationDto } from '../common';
import { DownloadsService } from './downloads.service';
import { CreateDownloadDto } from './dto/download.dto';

const uploadDir = process.env.UPLOAD_DIR || './uploads';

@Controller('downloads')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class DownloadsController {
  constructor(
    private downloadsService: DownloadsService,
    private auditLogService: AuditLogService,
  ) {}

  @Get()
  findAll(
    @Query() query: PaginationDto,
    @Query('category') category?: DownloadCategory,
  ) {
    return this.downloadsService.findAll({ ...query, category });
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: join(uploadDir, 'downloads'),
        filename: (_req, file, cb) => {
          cb(null, `${randomUUID()}${extname(file.originalname)}`);
        },
      }),
      limits: { fileSize: parseInt(process.env.MAX_FILE_SIZE || '5242880', 10) },
    }),
  )
  async create(
    @Body() dto: CreateDownloadDto,
    @UploadedFile() file: Express.Multer.File,
    @Request() req: RequestWithUser,
  ) {
    if (!file) throw new BadRequestException('ފައިލެއް ބޭނުންވޭ');
    const result = await this.downloadsService.create(
      dto.title,
      dto.category,
      `/uploads/downloads/${file.filename}`,
    );
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'CREATE',
      entity: 'DownloadItem',
      entityId: result.id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    const result = await this.downloadsService.remove(parseInt(id, 10));
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'DELETE',
      entity: 'DownloadItem',
      entityId: id,
    });
    return result;
  }
}
