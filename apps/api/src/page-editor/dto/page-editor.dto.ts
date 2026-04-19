import { IsObject } from 'class-validator';

export class UpdatePageSectionDto {
  @IsObject()
  fields: Record<string, any>;
}
