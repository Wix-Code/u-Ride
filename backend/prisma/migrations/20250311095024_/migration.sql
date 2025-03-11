-- DropIndex
DROP INDEX "Book_userId_key";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'pending';
