import { IsBoolean, IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateAnnouncementDto {
  @IsBoolean()
  isEnabled: boolean;

  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsString()
  link?: string;

  @IsOptional()
  @IsIn(['ALL', 'APPLICANTS', 'STUDENTS'])
  audience?: 'ALL' | 'APPLICANTS' | 'STUDENTS';
}
