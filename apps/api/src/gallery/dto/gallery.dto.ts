import { IsOptional, IsString } from 'class-validator';

export class CreateGalleryImageDto {
  @IsOptional()
  @IsString()
  caption?: string;
}
