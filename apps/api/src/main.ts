import { NestFactory } from '@nestjs/core';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common';
import { join } from 'path';
import * as express from 'express';
import { existsSync, mkdirSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api');

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      exceptionFactory: (errors) => {
        const firstError = errors[0];
        const constraints = firstError.constraints;
        const msg = constraints ? Object.values(constraints)[0] : 'ފޯމު ފުރުމުގައި މައްސަލައެއް އުޅޭ';
        return new BadRequestException(msg);
      },
    }),
  );

  // Global exception filter
  app.useGlobalFilters(new AllExceptionsFilter());

  // CORS
  app.enableCors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
    credentials: true,
  });

  // Static file serving for uploads
  const uploadDir = process.env.UPLOAD_DIR || './uploads';
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true });
  }
  if (!existsSync(join(uploadDir, 'payments'))) {
    mkdirSync(join(uploadDir, 'payments'), { recursive: true });
  }
  if (!existsSync(join(uploadDir, 'gallery'))) {
    mkdirSync(join(uploadDir, 'gallery'), { recursive: true });
  }
  if (!existsSync(join(uploadDir, 'downloads'))) {
    mkdirSync(join(uploadDir, 'downloads'), { recursive: true });
  }
  app.use('/uploads', express.static(join(process.cwd(), uploadDir)));

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`🚀 API running on http://localhost:${port}/api`);
}
bootstrap();
