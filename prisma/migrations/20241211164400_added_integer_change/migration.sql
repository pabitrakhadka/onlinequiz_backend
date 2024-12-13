/*
  Warnings:

  - Changed the type of `category1` on the `SubjectiveQuestionOnly` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SubjectiveQuestionOnly" DROP COLUMN "category1",
ADD COLUMN     "category1" INTEGER NOT NULL;
