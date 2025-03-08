-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "pickUp" TEXT NOT NULL,
    "DropOff" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_userId_key" ON "Book"("userId");
