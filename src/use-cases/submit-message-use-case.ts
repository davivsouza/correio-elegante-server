import { InboxRepository } from "../repositories/inbox-repository";

interface SubmitMessageUseCaseRequest {
  email_sender: string;
  email_addresse: string;
  message_title: string;
  message_content: string;
  name_sender: string;
  photoURL_sender: string;
}

export class SubmitMessageUseCase {
  constructor(private inboxRepository: InboxRepository) {}

  async execute(request: SubmitMessageUseCaseRequest) {
    const {
      email_addresse,
      email_sender,
      message_content,
      message_title,
      name_sender,
      photoURL_sender,
    } = request;

    await this.inboxRepository.create({
      email_addresse,
      email_sender,
      message_content,
      message_title,
      name_sender,
      photoURL_sender,
      
    });
  }
}
