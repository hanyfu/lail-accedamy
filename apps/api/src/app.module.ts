import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { DepartmentsModule } from './departments/departments.module';
import { ProgramsModule } from './programs/programs.module';
import { IntakesModule } from './intakes/intakes.module';
import { ApplicantsModule } from './applicants/applicants.module';
import { StudentsModule } from './students/students.module';
import { FinanceModule } from './finance/finance.module';
import { NoticesModule } from './notices/notices.module';
import { CoursesModule } from './courses/courses.module';
import { GalleryModule } from './gallery/gallery.module';
import { DownloadsModule } from './downloads/downloads.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { PageEditorModule } from './page-editor/page-editor.module';
import { SettingsModule } from './settings/settings.module';
import { ContentModule } from './content/content.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuditLogsModule,
    AuthModule,
    DepartmentsModule,
    ProgramsModule,
    IntakesModule,
    ApplicantsModule,
    StudentsModule,
    FinanceModule,
    NoticesModule,
    CoursesModule,
    GalleryModule,
    DownloadsModule,
    AnnouncementsModule,
    EnrollmentsModule,
    PageEditorModule,
    SettingsModule,
    ContentModule,
  ],
})
export class AppModule {}
