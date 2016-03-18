function sqlite(filename) {
  return {
    client: 'sqlite3',
    connection: { filename },
    migrations: { tableName: 'knex_migrations' },
    useNullAsDefault: true
  };
}

module.exports = {
  development: sqlite('development.db'),
  test: sqlite('test.db'),

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
