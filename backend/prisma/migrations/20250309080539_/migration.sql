-- AlterTable
ALTER TABLE "Rent" ADD COLUMN     "price" TEXT,
ALTER COLUMN "vehicleType" DROP NOT NULL,
ALTER COLUMN "serviceType" DROP NOT NULL,
ALTER COLUMN "vehicleYear" DROP NOT NULL,
ALTER COLUMN "vehicleQty" DROP NOT NULL;
