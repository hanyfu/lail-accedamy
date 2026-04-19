-- AlterEnum
ALTER TYPE "EnrollmentStatus" ADD VALUE IF NOT EXISTS 'COMPLETED';
ALTER TYPE "EnrollmentStatus" ADD VALUE IF NOT EXISTS 'DROPOUT';

-- AlterTable
ALTER TABLE "enrollments"
ADD COLUMN "isArchived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "archivedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "enrollments_isArchived_idx" ON "enrollments"("isArchived");
