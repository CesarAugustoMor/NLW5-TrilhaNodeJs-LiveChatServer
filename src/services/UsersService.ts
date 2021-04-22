import { getCustomRepository } from 'typeorm';

import UsersRepository from '../repositories/UsersRepository';

export default class UserService {
  private usersRepository: UsersRepository;
  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    const userExists = await this.usersRepository.findOne({ email });

    if (userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({ email });

    await this.usersRepository.save(user);

    return user;
  }
}
