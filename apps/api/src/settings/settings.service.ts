import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateSiteSettingDto } from './dto/settings.dto';
import * as bcrypt from 'bcrypt';
import { getDefaultHomeContent } from '../common/default-home-content';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}

  async getSiteSettings() {
    const existing = await this.prisma.client.siteSetting.findFirst({
      orderBy: { id: 'asc' },
    });

    if (existing) return existing;

    return this.prisma.client.siteSetting.create({
      data: {
        collegeName: 'Lail Academy',
        tagline: 'Quality classes for every learner',
        logoUrl: '',
        phone: '+960 977-7441',
        email: 'lail.academymv@gmail.com',
        address: 'Lail Academy, Maldives',
        mapUrl: '',
        footerText: 'Lail Academy contact info',
        homeContent: getDefaultHomeContent(),
      },
    });
  }

  async updateSiteSettings(dto: UpdateSiteSettingDto) {
    const current = await this.getSiteSettings();
    return this.prisma.client.siteSetting.update({
      where: { id: current.id },
      data: dto,
    });
  }

  async changePassword(
    userId: number,
    currentPassword: string,
    newPassword: string,
  ) {
    if (newPassword === currentPassword) {
      throw new BadRequestException('އާ ޕާސްވޯޑް ކުރީގެ ޕާސްވޯޑާ ތަފާތުވާންވާނެ');
    }

    const user = await this.prisma.client.user.findUnique({ where: { id: userId } });
    if (!user) throw new UnauthorizedException('ޔޫޒަރ ނުފެނުނު');

    const ok = await bcrypt.compare(currentPassword, user.password);
    if (!ok) throw new UnauthorizedException('މިހާރުގެ ޕާސްވޯޑް ދިމައެއް ނުވޭ');

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.prisma.client.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
        refreshToken: null,
      },
    });

    return { message: 'ޕާސްވޯޑް ބަދަލުކުރެވިއްޖެ' };
  }
}
