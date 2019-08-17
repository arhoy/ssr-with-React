import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';

export default (req, store) => {
  const context = {};
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div> {renderRoutes(Routes)} </div>
      </StaticRouter>
    </Provider>
  );
  return `
      <html>
        <head>
          <title>Server Side Rendering with React and Redux</title>
          <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        <body>
          <div id = "root">${content}</div>
          <script src = "bundle.js" ></script>
        </body>
      </html>
    `;
};
