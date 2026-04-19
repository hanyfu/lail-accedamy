-- CreateEnum
CREATE TYPE "EnrollmentSex" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- AlterTable
ALTER TABLE "enrollments"
ADD COLUMN "parentName" TEXT,
ADD COLUMN "sex" "EnrollmentSex",
ADD COLUMN "birthDate" TIMESTAMP(3),
ADD COLUMN "viberPhone" TEXT;

-- CreateIndex
CREATE INDEX "enrollments_parentName_idx" ON "enrollments"("parentName");

-- CreateIndex
CREATE INDEX "enrollments_viberPhone_idx" ON "enrollments"("viberPhone");

-- CreateIndex
CREATE INDEX "enrollments_sex_idx" ON "enrollments"("sex");
