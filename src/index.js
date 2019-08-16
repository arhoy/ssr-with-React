import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// make public directory available "publicly"
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
