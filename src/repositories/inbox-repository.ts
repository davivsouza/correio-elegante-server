export interface InboxCreateData {
  email_sender: string;
  email_addresse: string;
  message_title: string;
  message_content: string;
  name_sender:string
  photoURL_sender:string
  created_at:string
}

export interface InboxRepository{
  create: (data: InboxCreateData) => Promise<void>
}