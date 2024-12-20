/*
  Warnings:

  - Changed the type of `correctAnswer` on the `UserDetailsScore` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `timeTaken` on the `UserDetailsScore` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `wrongAnswer` on the `UserDetailsScore` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserDetailsScore" DROP COLUMN "correctAnswer",
ADD COLUMN     "correctAnswer" INTEGER NOT NULL,
DROP COLUMN "timeTaken",
ADD COLUMN     "timeTaken" INTEGER NOT NULL,
DROP COLUMN "wrongAnswer",
ADD COLUMN     "wrongAnswer" INTEGER NOT NULL;
