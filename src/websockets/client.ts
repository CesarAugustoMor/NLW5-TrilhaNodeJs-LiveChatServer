import { io } from '../http';
import ConnectionsService from '../services/ConnectionsService';
import UsersService from '../services/UsersService';
import MessagesService from '../services/MessagesService';

io.on('connect', socket => {
  const connectionsService = new ConnectionsService();
  const usersService = new UsersService();
  const messagesService = new MessagesService();

  socket.on('client_first_access', async params => {
    const { text, email } = params;

    const user = await usersService.create(email);

    const connection = await connectionsService.findByUserId(user.id);

    if (!connection) {
      await connectionsService.createOrUpdate({
        socket_id: socket.id,
        user_id: user.id,
      });
    } else {
      connection.socket_id = socket.id;

      await connectionsService.createOrUpdate(connection);
    }

    await messagesService.create({
      text,
      user_id: user.id,
    });
  });
});
