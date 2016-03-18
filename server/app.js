import express from 'express';
import keyBy from 'lodash/keyBy';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';

import App from '../client/app';
import createStore from '../client/store';
import Todo from './todo';
import todos from './todos-controller';
import webpackConfig from '../webpack.config';

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use('/static', webpackMiddleware(webpack(webpackConfig)));
}

app.use('/api/v1/todos', todos);

// Bootstrap the app by preparing the initialState
// and doing a first-pass render of the page, to
// be rehydrated on the clientside
//
// Recipe from http://redux.js.org/docs/recipes/ServerRendering.html
app.get('/', function (req, res) {
  // Performance note: loads the entire todos table to serialize
  // into a single response. Only suitable for demo apps like this :)
  Todo.fetchAll().then(todos => {
    const byId = keyBy(todos.toJSON(), 'id');
    const store = createStore({ todos: byId });
    const appHtml = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    res.send(renderIndex(appHtml, store.getState()));
  })
})

function renderIndex(appHtml, initialState) {
  // security note: literal string interpolation. React-rendered content
  // is html-safe, as is the serialized state object (see serialize-javascript module)
  return `
    <!doctype>
    <html>
      <head>
        <title>Redo Todo List</title>
        <script src="https://cdn.polyfill.io/v2/polyfill.js?features=es6,intl" defer></script>
        <script src="/static/index.js" defer></script>
        <link rel="stylesheet" href="/static/index.css"></link>
      </head>
      <body>
        <div id="react-root">${appHtml}</div>
      </body>
      <script>
        window.__INITIAL__STATE__ = ${serialize(initialState)}
      </script>
    </html>
  `;
}

export default app;
