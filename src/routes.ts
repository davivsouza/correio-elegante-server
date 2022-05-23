import { Router } from "express";
import { PrismaInboxRepository } from "./repositories/prisma/prisma-inbox-repository";
import { SubmitMessageUseCase } from "./use-cases/submit-message-use-case";

const router = Router();

const prismaInboxRepository = new PrismaInboxRepository();

router.post("/message", async (req, res) => {
  const {
    name_sender,
    photoURL_sender,
    email_sender,
    email_addresse,
    message_title,
    message_content,
    created_at
  } = req.body;

  const submitMessageUseCase = new SubmitMessageUseCase(prismaInboxRepository);

  await submitMessageUseCase.execute({
    name_sender,
    photoURL_sender,
    email_sender,
    email_addresse,
    message_title,
    message_content,
    created_at
  });
});

router.get("/inbox/:email", async (req, res) => {
  const { email } = req.params;

  const inbox = await prismaInboxRepository.getInbox(email);
  res.json(inbox);
});
export { router };
