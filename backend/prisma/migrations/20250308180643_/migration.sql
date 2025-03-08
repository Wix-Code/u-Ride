-- AlterTable
ALTER TABLE "Rent" ADD COLUMN     "carId" INTEGER;

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "addHor" INTEGER NOT NULL,
    "fullDay" INTEGER NOT NULL,
    "halfDay" INTEGER NOT NULL,
    "luggage" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_userId_key" ON "Car"("userId");
