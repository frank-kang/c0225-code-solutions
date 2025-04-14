import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

app.get('/', (req, res) => {
  res.send('you are at root');
});

app.get('/notes', (req, res) => {
  res.send('your notes');
});

app.post('/notes/:noteId', (req, res) => {
  const noteId = req.params;
  res.send(`NoteId: ${noteId}`);
});
