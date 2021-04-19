import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ username: 'Cesar' });
});

app.listen(3333, () => {
  console.log('Server is running at port 3333!');
});
