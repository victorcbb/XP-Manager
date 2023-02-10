/*
  Warnings:

  - You are about to drop the column `characterId` on the `experiences` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "experiences" DROP CONSTRAINT "experiences_characterId_fkey";

-- AlterTable
ALTER TABLE "experiences" DROP COLUMN "characterId",
ADD COLUMN     "character_id" TEXT;

-- AddForeignKey
ALTER TABLE "experiences" ADD CONSTRAINT "experiences_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
