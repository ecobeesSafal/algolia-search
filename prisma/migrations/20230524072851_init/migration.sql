-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "objectID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);
