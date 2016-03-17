import knex from 'knex';
import bookshelf from 'bookshelf';

import knexfile from '../knexfile';

const db = knex(knexfile[process.env.NODE_ENV || 'development']);
const orm = bookshelf(db);
orm.plugin('visibility');

export default orm;
