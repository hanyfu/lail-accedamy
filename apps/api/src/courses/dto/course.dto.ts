import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

const CLASS_AVAILABILITY = ['OPEN', 'LIMITED', 'FULL', 'CLOSED'] as const;
type ClassAvailability = (typeof CLASS_AVAILABILITY)[number];

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  duration?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  slots?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  monthlyFee?: number;

  @IsOptional()
  @IsEnum(CLASS_AVAILABILITY)
  availability?: ClassAvailability;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  duration?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  slots?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  monthlyFee?: number;

  @IsOptional()
  @IsEnum(CLASS_AVAILABILITY)
  availability?: ClassAvailability;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
