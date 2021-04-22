import { getCustomRepository } from 'typeorm';

import MessagesRepository from '../repositories/MessagesRepository';

interface MessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

export default class MessageService {
  private messagesRepository: MessagesRepository;

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository);
  }
  async create({ admin_id, text, user_id }: MessageCreate) {
    const message = this.messagesRepository.create({ admin_id, text, user_id });

    await this.messagesRepository.save(message);

    return message;
  }

  async listByUser(user_id: string) {
    const list = await this.messagesRepository.find({
      where: { user_id },
      relations: ['user'],
    });

    return list;
  }
}
