const path = require('path');

function sqlite(filename) {
  return {
    client: 'sqlite3',
    connection: { filename },
    migrations: { tableName: 'knex_migrations' },
    useNullAsDefault: true
  };
}

module.exports = {
  development: sqlite(path.join(__dirname, 'development.sqlite3')),
  test: sqlite(path.join(__dirname, 'test.sqlite3')),

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
