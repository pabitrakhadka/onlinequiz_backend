/*
  Warnings:

  - Added the required column `attemp` to the `UserDetailsScore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correctAnswer` to the `UserDetailsScore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeTaken` to the `UserDetailsScore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wrongAnswer` to the `UserDetailsScore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserDetailsScore" ADD COLUMN     "attemp" INTEGER NOT NULL,
ADD COLUMN     "correctAnswer" TEXT NOT NULL,
ADD COLUMN     "timeTaken" TEXT NOT NULL,
ADD COLUMN     "wrongAnswer" TEXT NOT NULL;
