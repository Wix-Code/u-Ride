/*
  Warnings:

  - The `price` column on the `Rent` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "Car_userId_key";

-- DropIndex
DROP INDEX "Rent_userId_key";

-- AlterTable
ALTER TABLE "Rent" DROP COLUMN "price",
ADD COLUMN     "price" INTEGER;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE SET NULL ON UPDATE CASCADE;
