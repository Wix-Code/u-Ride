/*
  Warnings:

  - Changed the type of `vehicleYear` on the `Rent` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `vehicleQty` on the `Rent` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `age` on the `Rent` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Rent" DROP COLUMN "vehicleYear",
ADD COLUMN     "vehicleYear" INTEGER NOT NULL,
DROP COLUMN "vehicleQty",
ADD COLUMN     "vehicleQty" INTEGER NOT NULL,
DROP COLUMN "age",
ADD COLUMN     "age" INTEGER NOT NULL;
