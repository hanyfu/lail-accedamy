import { Type } from 'class-transformer';
import { IsBoolean, IsDateString, IsEmail, IsIn, IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateEnrollmentDto {
  @IsString()
  parentName: string;

  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  viberPhone: string;

  @IsIn(['MALE', 'FEMALE', 'OTHER'])
  sex: 'MALE' | 'FEMALE' | 'OTHER';

  @IsDateString()
  birthDate: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  telegramId?: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsString()
  idCardNo: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  courseId?: number;
}

export class UpdateEnrollmentDto {
  @IsOptional()
  @IsIn(['APPROVED', 'STUDYING', 'COMPLETED', 'DROPOUT', 'REJECTED'])
  status?: 'APPROVED' | 'STUDYING' | 'COMPLETED' | 'DROPOUT' | 'REJECTED';

  @IsOptional()
  @IsString()
  rejectionNote?: string;

  @IsOptional()
  @IsString()
  idCardNo?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  classFee?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  courseId?: number;

  @IsOptional()
  @IsBoolean()
  isArchived?: boolean;
}
