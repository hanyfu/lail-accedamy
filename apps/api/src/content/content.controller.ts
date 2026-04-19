import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Get('ping')
  ping() {
    return this.contentService.ping();
  }

  @Get('site-settings')
  getPublicSiteSettings() {
    return this.contentService.getPublicSiteSettings();
  }
}
