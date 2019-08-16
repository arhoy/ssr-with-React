// ** the entry point of our client side code base **
// A vanilla React App startup location
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

// must render the app into the same div that was rendered in the browser.
// "breathing life into the skeleton component" by setting up the event listeners and such
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
