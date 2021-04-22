import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';
import { renderFile } from 'ejs';

import './database';
import routes from './routes';

const app = express();

const dirPublic = path.join(__dirname, '..', 'public');

app.use(express.static(dirPublic));
app.set('views', dirPublic);
app.engine('html', renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => res.render('html/client.html'));

const http = createServer(app); // criação protocolo http
const io = new Server(http); // criação protocolo WebSocket

io.on('connection', (socket: Socket) => {
  console.log('Se conectou', socket.id);
});

app.use(express.json());

app.use(routes);

export { http, io };
