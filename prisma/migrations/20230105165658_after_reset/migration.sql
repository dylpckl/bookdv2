/*
  Warnings:

  - You are about to drop the `Club` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Club" DROP CONSTRAINT "Club_ownerId_fkey";

-- DropTable
DROP TABLE "Club";
