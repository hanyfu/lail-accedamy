import { Module, Global } from '@nestjs/common';
import { AuditLogService } from './audit-logs.service';
import { AuditLogsController } from './audit-logs.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Global()
@Module({
  imports: [PrismaModule],
  providers: [AuditLogService],
  controllers: [AuditLogsController],
  exports: [AuditLogService],
})
export class AuditLogsModule {}
