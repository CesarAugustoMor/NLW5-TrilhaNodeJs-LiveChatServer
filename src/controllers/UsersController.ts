import { Request, Response } from 'express';

import UsersService from '../services/UsersService';

class UsersController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const settingsService = new UsersService();

    try {
      const settings = await settingsService.create(email);

      return res.status(201).json(settings);
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}

export default new UsersController();
