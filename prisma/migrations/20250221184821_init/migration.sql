-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kehadiran" TEXT NOT NULL,
    "pesan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
