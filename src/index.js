import 'babel-polyfill';

import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
// make public directory available "publicly"
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  const routeArray = matchRoutes(Routes, req.path);

  if (routeArray.length > 0) {
    const promises = routeArray.map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises)
      .then(() => {
        res.send(renderer(req, store));
      })
      .catch(err => console.log(`Error in index.js, ${err}`));
  }
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
