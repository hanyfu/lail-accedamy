-- CreateEnum
CREATE TYPE "ClassAvailability" AS ENUM ('OPEN', 'LIMITED', 'FULL', 'CLOSED');

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_invoiceId_fkey";

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "availability" "ClassAvailability" NOT NULL DEFAULT 'OPEN',
ADD COLUMN     "monthlyFee" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "slots" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "courses_availability_idx" ON "courses"("availability");

-- CreateIndex
CREATE INDEX "courses_slots_idx" ON "courses"("slots");

-- CreateIndex
CREATE INDEX "courses_monthlyFee_idx" ON "courses"("monthlyFee");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
