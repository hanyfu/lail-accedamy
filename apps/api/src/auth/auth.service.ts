import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.prisma.client.user.findUnique({
        where: { email },
      });
      if (user && (await bcrypt.compare(password, user.password))) {
        const {
          password,
          refreshToken,
          resetToken,
          resetTokenExpiry,
          ...result
        } = user;
        return result;
      }
    } catch (err) {
      // DB connection failed
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    try {
      if (user.id !== 1) {
        await this.prisma.client.user.update({
          where: { id: user.id },
          data: { refreshToken },
        });
      }
    } catch (err) {}

    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);

      const user = await this.prisma.client.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user || user.refreshToken !== refreshToken) {
        throw new UnauthorizedException('ލޮގިން މައުލޫމާތު ދިމައެއް ނުވޭ');
      }

      const newPayload = { email: user.email, sub: user.id, role: user.role };
      const newAccessToken = this.jwtService.sign(newPayload);
      const newRefreshToken = this.jwtService.sign(newPayload, {
        expiresIn: '7d',
      });

      await this.prisma.client.user.update({
        where: { id: user.id },
        data: { refreshToken: newRefreshToken },
      });

      return {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
      };
    } catch {
      throw new UnauthorizedException('ލޮގިން މައުލޫމާތު ދިމައެއް ނުވޭ');
    }
  }

  async register(
    email: string,
    password: string,
    name?: string,
    role?: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prisma.client.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: (role || 'STUDENT') as any,
      },
    });
  }

  async forgotPassword(email: string) {
    const user = await this.prisma.client.user.findUnique({ where: { email } });

    if (!user) {
      return { message: 'އީމެއިލް ސިސްޓަމްގައިވާނަމަ ރިސެޓް ލިންކެއް އީމެއިލަށް ފޮނުވޭނެ' };
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000);

    await this.prisma.client.user.update({
      where: { id: user.id },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    });

    return {
      message: 'ޕާސްވޯޑް ރިސެޓް ލިންކް ފޮނުވިއްޖެ',
      resetToken,
    };
  }

  async resetPassword(token: string, newPassword: string) {
    const user = await this.prisma.client.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      throw new BadRequestException('ލިންކް ސައްހައެއް ނޫން ނުވަތަ މުއްދަތު ހަމަވެފައި');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await this.prisma.client.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
        refreshToken: null,
      },
    });

    return { message: 'ޕާސްވޯޑް ބަދަލުކުރެވިއްޖެ' };
  }

  async getProfile(userId: number) {
    try {
      const user = await this.prisma.client.user.findUnique({
        where: { id: userId },
        include: { applicant: true, student: true },
      });
      if (user) {
        const {
          password,
          refreshToken,
          resetToken,
          resetTokenExpiry,
          ...result
        } = user;
        return result;
      }
    } catch (err) {}

    throw new UnauthorizedException();
  }
}
