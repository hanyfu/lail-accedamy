import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Query,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { randomUUID } from 'crypto';
import { extname, join } from 'path';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { RequestWithUser } from '../common/interfaces/request-with-user';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { PaginationDto } from '../common';
import { GalleryService } from './gallery.service';
import { CreateGalleryImageDto } from './dto/gallery.dto';

const uploadDir = process.env.UPLOAD_DIR || './uploads';

@Controller('gallery')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class GalleryController {
  constructor(
    private galleryService: GalleryService,
    private auditLogService: AuditLogService,
  ) {}

  @Get()
  findAll(@Query() query: PaginationDto) {
    return this.galleryService.findAll(query);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: join(uploadDir, 'gallery'),
        filename: (_req, file, cb) => {
          cb(null, `${randomUUID()}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (_req, file, cb) => {
        const allowed = ['.jpg', '.jpeg', '.png', '.webp'];
        const ext = extname(file.originalname).toLowerCase();
        if (allowed.includes(ext)) cb(null, true);
        else cb(new Error('Only image files are allowed'), false);
      },
      limits: { fileSize: parseInt(process.env.MAX_FILE_SIZE || '5242880', 10) },
    }),
  )
  async create(
    @Body() dto: CreateGalleryImageDto,
    @UploadedFile() file: Express.Multer.File,
    @Request() req: RequestWithUser,
  ) {
    if (!file) throw new BadRequestException('ފޮޓޯ ފައިލެއް ބޭނުންވޭ');
    const result = await this.galleryService.create(
      `/uploads/gallery/${file.filename}`,
      dto.caption,
    );
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'CREATE',
      entity: 'GalleryImage',
      entityId: result.id,
      details: JSON.stringify({ caption: dto.caption }),
    });
    return result;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    const result = await this.galleryService.remove(parseInt(id, 10));
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'DELETE',
      entity: 'GalleryImage',
      entityId: id,
    });
    return result;
  }
}
