// ** the entry point of our client side code base **
// A vanilla React App startup location
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { renderRoutes } from 'react-router-config';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

// must render the app into the same div that was rendered in the browser.
// "breathing life into the skeleton component" by setting up the event listeners and such
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div> {renderRoutes(Routes)} </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
