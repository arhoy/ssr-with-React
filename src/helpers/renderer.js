import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {
  const content = renderToString(<Home />);
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
