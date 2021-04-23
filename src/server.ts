import { http } from './http';
import './websockets/client';
import './websockets/admin';

http.listen(3333, () => {
  console.log('Server is running at port 3333!');
});
