import { Request, Response } from 'express';

import MessagesService from '../services/MessagesService';

class MessagesController {
  async create(req: Request, res: Response): Promise<Response> {
    const { admin_id, text, user_id } = req.body;

    const messagesService = new MessagesService();

    try {
      const messages = await messagesService.create({
        admin_id,
        text,
        user_id,
      });

      return res.status(201).json(messages);
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  async showByUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const messagesService = new MessagesService();

    const list = await messagesService.listByUser(id);

    return res.json(list);
  }
}

export default new MessagesController();
