import { getCustomRepository } from 'typeorm';

import ConnectionsRepository from '../repositories/ConnectionsRepository';

interface ConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

export default class ConnectionService {
  private connectionsRepository: ConnectionsRepository;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }
  async createOrUpdate({ admin_id, socket_id, user_id, id }: ConnectionCreate) {
    const connection = this.connectionsRepository.create({
      admin_id,
      socket_id,
      user_id,
      id,
    });

    await this.connectionsRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    return this.connectionsRepository.findOne({ user_id });
  }
}
