/*
  Warnings:

  - You are about to drop the column `privateKey` on the `SolWallet` table. All the data in the column will be lost.
  - Added the required column `share1` to the `SolWallet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `share2` to the `SolWallet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `share3` to the `SolWallet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SolWallet" DROP COLUMN "privateKey",
ADD COLUMN     "share1" TEXT NOT NULL,
ADD COLUMN     "share2" TEXT NOT NULL,
ADD COLUMN     "share3" TEXT NOT NULL;
