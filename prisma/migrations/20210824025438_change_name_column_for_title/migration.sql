/*
  Warnings:

  - You are about to drop the column `name` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "name",
ADD COLUMN     "title" TEXT;
