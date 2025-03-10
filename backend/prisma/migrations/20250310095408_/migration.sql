/*
  Warnings:

  - You are about to drop the column `serviceType` on the `Rent` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleQty` on the `Rent` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleType` on the `Rent` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleYear` on the `Rent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "time" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Rent" DROP COLUMN "serviceType",
DROP COLUMN "vehicleQty",
DROP COLUMN "vehicleType",
DROP COLUMN "vehicleYear",
ALTER COLUMN "startDate" DROP NOT NULL;
