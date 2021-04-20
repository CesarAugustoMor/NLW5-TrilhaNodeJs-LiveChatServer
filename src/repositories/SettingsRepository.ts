import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import Setting from '../entities/Setting';

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export default SettingsRepository;
