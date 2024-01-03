/*
  Warnings:

  - Added the required column `code` to the `AuthCodes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AuthCodes" ADD COLUMN     "code" TEXT NOT NULL;
