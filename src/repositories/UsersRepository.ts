import { EntityRepository, Repository } from 'typeorm';

import User from '../entities/User';

@EntityRepository(User)
class SettingsRepository extends Repository<User> {}

export default SettingsRepository;
