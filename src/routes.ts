import { Router } from 'express';
import SettingsController from './controllers/SettingsController';
import UsersController from './controllers/UsersController';
import MessagesController from './controllers/MessagesController';

const routes = Router();

routes.post('/settings', SettingsController.create);
routes.get('/settings/:username', SettingsController.findByUsername);
routes.put('/settings/:username', SettingsController.updateChat);

routes.post('/users', UsersController.create);

routes.get('/messages/:id', MessagesController.showByUser);
routes.post('/messages', MessagesController.create);

export default routes;
