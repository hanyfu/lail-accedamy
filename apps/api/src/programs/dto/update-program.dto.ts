import { IsString, IsInt, IsOptional, MinLength } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProgramDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
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
  departmentId?: number;
}
