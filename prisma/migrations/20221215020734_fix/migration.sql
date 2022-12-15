/*
  Warnings:

  - You are about to drop the column `recipientId` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `recepientId` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recepientId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "readAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "canceledAt" DATETIME
);
INSERT INTO "new_Notification" ("canceledAt", "category", "content", "createdAt", "id", "readAt") SELECT "canceledAt", "category", "content", "createdAt", "id", "readAt" FROM "Notification";
DROP TABLE "Notification";
ALTER TABLE "new_Notification" RENAME TO "Notification";
CREATE INDEX "Notification_recepientId_idx" ON "Notification"("recepientId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;