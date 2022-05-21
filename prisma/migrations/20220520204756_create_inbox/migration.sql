-- CreateTable
CREATE TABLE "emails_received" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name_sender" TEXT NOT NULL,
    "photoURL_sender" TEXT NOT NULL,
    "email_sender" TEXT NOT NULL,
    "email_addresse" TEXT NOT NULL,
    "message_title" TEXT NOT NULL,
    "message_content" TEXT NOT NULL,
    "created_at" TEXT NOT NULL
);
