/*
  Warnings:

  - The `rentalType` column on the `Rent` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Rent" DROP COLUMN "rentalType",
ADD COLUMN     "rentalType" INTEGER;
