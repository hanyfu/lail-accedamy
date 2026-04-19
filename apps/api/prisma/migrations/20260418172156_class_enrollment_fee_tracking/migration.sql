-- CreateEnum
CREATE TYPE "EnrollmentStatus" AS ENUM ('PENDING', 'APPROVED', 'STUDYING', 'REJECTED');

-- AlterTable
ALTER TABLE "enrollments"
ADD COLUMN "address" TEXT,
ADD COLUMN "telegramId" TEXT,
ADD COLUMN "status" "EnrollmentStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN "rejectionNote" TEXT,
ADD COLUMN "idCardNo" TEXT,
ADD COLUMN "classFee" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN "totalPaid" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN "approvedAt" TIMESTAMP(3),
ADD COLUMN "startedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "payments"
ALTER COLUMN "invoiceId" DROP NOT NULL,
ADD COLUMN "enrollmentId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "enrollments_idCardNo_key" ON "enrollments"("idCardNo");

-- CreateIndex
CREATE INDEX "enrollments_phone_idx" ON "enrollments"("phone");

-- CreateIndex
CREATE INDEX "enrollments_status_idx" ON "enrollments"("status");

-- CreateIndex
CREATE INDEX "enrollments_idCardNo_idx" ON "enrollments"("idCardNo");

-- CreateIndex
CREATE INDEX "payments_enrollmentId_idx" ON "payments"("enrollmentId");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "enrollments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
