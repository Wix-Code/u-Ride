/*
  Warnings:

  - You are about to drop the column `DropOff` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `pickUp` on the `Book` table. All the data in the column will be lost.
  - Added the required column `DropoffLocation` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupLocation` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "DropOff",
DROP COLUMN "pickUp",
ADD COLUMN     "DropoffLocation" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "pickupLocation" TEXT NOT NULL,
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;
