/*
  Warnings:

  - You are about to drop the column `created_at` on the `emails_received` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_emails_received" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_sender" TEXT NOT NULL,
    "photoURL_sender" TEXT NOT NULL,
    "email_sender" TEXT NOT NULL,
    "email_addresse" TEXT NOT NULL,
    "message_title" TEXT NOT NULL,
    "message_content" TEXT NOT NULL
);
INSERT INTO "new_emails_received" ("email_addresse", "email_sender", "id", "message_content", "message_title", "name_sender", "photoURL_sender") SELECT "email_addresse", "email_sender", "id", "message_content", "message_title", "name_sender", "photoURL_sender" FROM "emails_received";
DROP TABLE "emails_received";
ALTER TABLE "new_emails_received" RENAME TO "emails_received";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
