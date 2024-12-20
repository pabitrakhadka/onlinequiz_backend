/*
  Warnings:

  - You are about to drop the `UserDetailsScore` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserDetailsScore" DROP CONSTRAINT "UserDetailsScore_quizId_fkey";

-- DropForeignKey
ALTER TABLE "UserDetailsScore" DROP CONSTRAINT "UserDetailsScore_userId_fkey";

-- DropTable
DROP TABLE "UserDetailsScore";

-- CreateTable
CREATE TABLE "QuizSession" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "timeTaken" INTEGER NOT NULL,
    "datePlayed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attempt" INTEGER NOT NULL DEFAULT 1,
    "position" INTEGER,

    CONSTRAINT "QuizSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizSessionDetail" (
    "id" SERIAL NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "timeSpent" INTEGER,

    CONSTRAINT "QuizSessionDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuizSession_categoryId_userId_key" ON "QuizSession"("categoryId", "userId");

-- CreateIndex
CREATE INDEX "QuizSessionDetail_sessionId_idx" ON "QuizSessionDetail"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "QuizSessionDetail_sessionId_questionId_key" ON "QuizSessionDetail"("sessionId", "questionId");

-- AddForeignKey
ALTER TABLE "QuizSession" ADD CONSTRAINT "QuizSession_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizSession" ADD CONSTRAINT "QuizSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizSessionDetail" ADD CONSTRAINT "QuizSessionDetail_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizSessionDetail" ADD CONSTRAINT "QuizSessionDetail_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "QuizSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
