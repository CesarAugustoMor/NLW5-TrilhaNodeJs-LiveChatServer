import { Router } from 'express';
import SettingsController from './controllers/SettingsController';

const routes = Router();

/**
 * Tipos de parametros
 *
 * Routes Params => Parametros de rota
 * Query Params => Filtros e buscas
 * Body Params => dados no corpo da requisição
 */

routes.post('/settings', SettingsController.create);

export default routes;
