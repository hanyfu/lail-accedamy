import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsInt,
  IsOptional,
  Min,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFeeStructureDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  amount: number;

  @IsOptional()
  @IsString()
  currency?: string;

  @Type(() => Number)
  @IsInt()
  programId: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  intakeId?: number;
}

export class UpdateFeeStructureDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  amount?: number;

  @IsOptional()
  @IsString()
  currency?: string;
}

export class GenerateInvoiceDto {
  @Type(() => Number)
  @IsInt()
  studentId: number;

  @Type(() => Number)
  @IsInt()
  feeStructureId: number;

  @IsString()
  @IsNotEmpty()
  dueDate: string;
}

export class SubmitPaymentDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  invoiceId?: number;

  @IsOptional()
  @IsString()
  invoiceNumber?: string;

  @ValidateIf((obj) => !obj.invoiceId && !obj.invoiceNumber)
  @IsString()
  @IsNotEmpty()
  idCardNo?: string;

  @ValidateIf((obj) => !!obj.idCardNo)
  @Type(() => Number)
  @IsInt()
  courseId?: number;

  @ValidateIf((obj) => !!obj.idCardNo)
  @IsString()
  @IsNotEmpty()
  studentName?: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsString()
  @IsNotEmpty()
  method: string;

  @IsOptional()
  @IsString()
  reference?: string;
}

export class VerifyPaymentDto {
  @IsString()
  @IsNotEmpty()
  status: 'VERIFIED' | 'REJECTED';

  @IsOptional()
  @IsString()
  notes?: string;
}
