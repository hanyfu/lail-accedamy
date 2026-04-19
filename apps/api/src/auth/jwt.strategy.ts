import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'secret',
    });
  }

  async validate(payload: any) {
    const user = await this.prisma.client.user.findUnique({
      where: { id: payload.sub },
      include: {
        applicant: true,
        student: true,
      },
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
    return { id: payload.sub, email: payload.email, role: payload.role };
  }
}
