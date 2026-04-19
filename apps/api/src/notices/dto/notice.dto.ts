import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsInt,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateNoticeDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsString()
  audience?: 'ALL' | 'APPLICANTS' | 'STUDENTS';

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  programId?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  intakeId?: number;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;
}

export class UpdateNoticeDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  audience?: 'ALL' | 'APPLICANTS' | 'STUDENTS';

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  programId?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  intakeId?: number;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;
}
