/*
  Warnings:

  - You are about to drop the column `authorId` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `blogId` on the `Like` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[author_id]` on the table `Like` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author_id` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blog_id` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_blogId_fkey";

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "dislikecount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "authorId",
DROP COLUMN "blogId",
ADD COLUMN     "author_id" INTEGER NOT NULL,
ADD COLUMN     "blog_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isverify" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "dislike" (
    "id" SERIAL NOT NULL,
    "author_id" INTEGER NOT NULL,
    "blog_id" INTEGER NOT NULL,

    CONSTRAINT "dislike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "token" (
    "id" SERIAL NOT NULL,
    "token" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dislike_author_id_key" ON "dislike"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "Like_author_id_key" ON "Like"("author_id");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dislike" ADD CONSTRAINT "dislike_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dislike" ADD CONSTRAINT "dislike_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
