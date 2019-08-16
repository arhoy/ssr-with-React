import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default req => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <Routes />
    </StaticRouter>
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
