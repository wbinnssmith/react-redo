import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import createStore from './store';
import './app.css';

const store = createStore(window.__INITIAL__STATE__);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('react-root'));
