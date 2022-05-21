import { prisma } from "../../prisma";
import { InboxCreateData, InboxRepository } from "../inbox-repository";

export class PrismaInboxRepository implements InboxRepository {
  async create({email_addresse,email_sender,message_content,message_title, name_sender,
    photoURL_sender}: InboxCreateData) {
    await prisma.inbox.create({
      data: {
        name_sender,
        photoURL_sender,
        email_addresse,
        email_sender,
        message_content,
        message_title,
        
      },
    });
  }
  async getInbox(emailAdressee: string){
    const inboxMessages =  await prisma.inbox.findMany({
      where: {
        email_addresse: emailAdressee
      }
    })

    return inboxMessages
  }
}
