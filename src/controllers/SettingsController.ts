import { Request, Response } from 'express';

import SettingsService from '../services/SettingsService';

class SettingsController {
  async create(req: Request, res: Response): Promise<Response> {
    const { chat, username } = req.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, username });

      return res.status(201).json(settings);
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async findByUsername(req: Request, res: Response): Promise<Response> {
    const { username } = req.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUsername(username);

    return res.json(settings);
  }

  async updateChat(req: Request, res: Response): Promise<Response> {
    const { username } = req.params;
    const { chat } = req.body;

    const settingsService = new SettingsService();

    await settingsService.updateChat(username, chat);

    return res.send();
  }
}

export default new SettingsController();
