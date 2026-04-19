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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { randomUUID } from 'crypto';
import { extname, join } from 'path';
import { FinanceService } from './finance.service';
import {
  CreateFeeStructureDto,
  UpdateFeeStructureDto,
  GenerateInvoiceDto,
  SubmitPaymentDto,
  VerifyPaymentDto,
} from './dto/finance.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AuditLogService } from '../audit-logs/audit-logs.service';
import { PaginationDto } from '../common';
import { RequestWithUser } from '../common/interfaces/request-with-user';

const uploadDir = process.env.UPLOAD_DIR || './uploads';

@Controller('finance')
export class FinanceController {
  constructor(
    private financeService: FinanceService,
    private auditLogService: AuditLogService,
  ) {}

  // ─── Fee Structures ───────────────────────────────────

  @Get('fee-structures')
  @UseGuards(JwtAuthGuard)
  findAllFeeStructures(
    @Query() query: PaginationDto,
    @Query('programId') programId?: string,
  ) {
    return this.financeService.findAllFeeStructures({
      ...query,
      programId: programId ? parseInt(programId, 10) : undefined,
    });
  }

  @Get('fee-structures/:id')
  @UseGuards(JwtAuthGuard)
  findOneFeeStructure(@Param('id') id: string) {
    return this.financeService.findOneFeeStructure(parseInt(id, 10));
  }

  @Post('fee-structures')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async createFeeStructure(
    @Body() dto: CreateFeeStructureDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.financeService.createFeeStructure(dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'CREATE',
      entity: 'FeeStructure',
      entityId: result.id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Put('fee-structures/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async updateFeeStructure(
    @Param('id') id: string,
    @Body() dto: UpdateFeeStructureDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.financeService.updateFeeStructure(
      parseInt(id, 10),
      dto,
    );
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'UPDATE',
      entity: 'FeeStructure',
      entityId: id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Delete('fee-structures/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async removeFeeStructure(@Param('id') id: string, @Request() req: RequestWithUser) {
    const result = await this.financeService.removeFeeStructure(
      parseInt(id, 10),
    );
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'DELETE',
      entity: 'FeeStructure',
      entityId: id,
    });
    return result;
  }

  // ─── Invoices ─────────────────────────────────────────

  @Get('invoices')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findAllInvoices(
    @Query() query: PaginationDto,
    @Query('status') status?: string,
    @Query('studentId') studentId?: string,
  ) {
    return this.financeService.findAllInvoices({
      ...query,
      status,
      studentId: studentId ? parseInt(studentId, 10) : undefined,
    });
  }

  @Get('invoices/my')
  @UseGuards(JwtAuthGuard)
  findMyInvoices(@Request() req: RequestWithUser) {
    return this.financeService.findMyInvoices(req.user.id);
  }

  @Get('invoices/:id')
  @UseGuards(JwtAuthGuard)
  findOneInvoice(@Param('id') id: string) {
    return this.financeService.findOneInvoice(parseInt(id, 10));
  }

  @Post('invoices')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async generateInvoice(@Body() dto: GenerateInvoiceDto, @Request() req: RequestWithUser) {
    const result = await this.financeService.generateInvoice(dto);
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'CREATE',
      entity: 'Invoice',
      entityId: result.id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  @Delete('invoices/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async deleteInvoice(@Param('id') id: string, @Request() req: RequestWithUser) {
    const result = await this.financeService.deleteInvoice(parseInt(id, 10));
    await this.auditLogService.log({
      userId: req.user.id,
      action: 'DELETE',
      entity: 'Invoice',
      entityId: id,
    });
    return result;
  }

  // ─── Payments ─────────────────────────────────────────

  @Get('payments')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findAllPayments(
    @Query() query: PaginationDto,
    @Query('status') status?: string,
    @Query('invoiceId') invoiceId?: string,
  ) {
    return this.financeService.findAllPayments({
      ...query,
      status,
      invoiceId: invoiceId ? parseInt(invoiceId, 10) : undefined,
    });
  }

  @Post('payments')
  @UseInterceptors(
    FileInterceptor('proof', {
      storage: diskStorage({
        destination: join(uploadDir, 'payments'),
        filename: (_req, file, cb) => {
          const uniqueName = `${randomUUID()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
      fileFilter: (_req, file, cb) => {
        const allowed = ['.pdf', '.jpg', '.jpeg', '.png', '.webp'];
        const ext = extname(file.originalname).toLowerCase();
        if (allowed.includes(ext)) {
          cb(null, true);
        } else {
          cb(new Error('Only PDF and image files are allowed'), false);
        }
      },
      limits: {
        fileSize: parseInt(process.env.MAX_FILE_SIZE || '5242880', 10),
      },
    }),
  )
  async submitPayment(
    @Body() dto: SubmitPaymentDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    const proofUrl = file ? `/uploads/payments/${file.filename}` : undefined;
    return this.financeService.submitPayment(dto, proofUrl);
  }

  @Put('payments/:id/verify')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async verifyPayment(
    @Param('id') id: string,
    @Body() dto: VerifyPaymentDto,
    @Request() req: RequestWithUser,
  ) {
    const result = await this.financeService.verifyPayment(
      parseInt(id, 10),
      dto,
    );
    await this.auditLogService.log({
      userId: req.user.id,
      action: dto.status === 'VERIFIED' ? 'VERIFY' : 'REJECT',
      entity: 'Payment',
      entityId: id,
      details: JSON.stringify(dto),
    });
    return result;
  }

  // ─── Reports ──────────────────────────────────────────

  @Get('summary')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  getFinanceSummary() {
    return this.financeService.getFinanceSummary();
  }

  @Get('dashboard')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  getDashboardStats() {
    return this.financeService.getDashboardStats();
  }
}
