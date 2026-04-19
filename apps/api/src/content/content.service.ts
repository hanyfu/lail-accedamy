import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { getDefaultHomeContent } from '../common/default-home-content';

@Injectable()
export class ContentService {
  constructor(private prisma: PrismaService) {}

  private defaultSiteSettings() {
    return {
      collegeName: 'Lail Academy',
      tagline: 'Quality classes for every learner',
      logoUrl: '',
      phone: '+960 977-7441',
      email: 'lail.academymv@gmail.com',
      address: 'Lail Academy, Maldives',
      mapUrl: '',
      footerText: 'Lail Academy contact info',
      homeContent: getDefaultHomeContent(),
    };
  }

  async ping() {
    // Keep Prisma in the module graph to validate connection at runtime.
    await this.prisma.client.$queryRaw`SELECT 1`;
    return { ok: true };
  }

  async getPublicSiteSettings() {
    const existing = await this.prisma.client.siteSetting.findFirst({
      orderBy: { id: 'asc' },
    });
    if (existing) return existing;
    return this.defaultSiteSettings();
  }
}
