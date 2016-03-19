import axios from 'axios';
import knexCleaner from 'knex-cleaner';

import app from '../app';
import bookshelf from '../bookshelf';

export function resetDb() {
  return knexCleaner.clean(bookshelf.knex);
}

let server;
export function makeServer() {
  server = server || app.listen(0);
  return server;
}

export function request(server) {
  const address = server.address();

  return axios.create({
    baseURL: `http://127.0.0.1:${address.port}`,
    timeout: 2000,
  });
}
