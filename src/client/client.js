// ** the entry point of our client side code base **
// A Normal React Startup location

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

// must render the app into the same div that was rendered in the browser.
// "breathing life into the skeleton component" by setting up the event listeners and such
ReactDOM.hydrate(<Home />, document.getElementById('root'));
