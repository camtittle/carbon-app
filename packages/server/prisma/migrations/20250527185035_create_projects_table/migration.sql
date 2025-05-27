-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('UnderDevelopment', 'UnderValidation', 'RegistrationRequested');

-- CreateTable
CREATE TABLE "Project" (
    "id" UUID NOT NULL,
    "url" TEXT NOT NULL,
    "status" "ProjectStatus" NOT NULL,
    "country" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
