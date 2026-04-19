import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AuditLogsModule } from '../audit-logs/audit-logs.module';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';

@Module({
  imports: [PrismaModule, AuditLogsModule],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}
