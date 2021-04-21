import SettingsRepository from '../repositories/SettingsRepository';
import { getCustomRepository } from 'typeorm';

interface Props {
  chat: boolean;
  username: string;
}

export default class SettingsService {
  private settingsRepository: SettingsRepository;
  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create({ chat, username }: Props) {
    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    await this.settingsRepository.save(settings);

    return settings;
  }
}
