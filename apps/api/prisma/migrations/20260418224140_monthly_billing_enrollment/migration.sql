-- AlterTable
ALTER TABLE "enrollments"
ADD COLUMN "totalBilled" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN "billingStartDate" TIMESTAMP(3),
ADD COLUMN "billingStoppedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "enrollments_billingStartDate_idx" ON "enrollments"("billingStartDate");
