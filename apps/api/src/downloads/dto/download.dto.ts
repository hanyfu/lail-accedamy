import { DownloadCategory } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateDownloadDto {
  @IsString()
  title: string;

  @IsEnum(DownloadCategory)
  category: DownloadCategory;
}
