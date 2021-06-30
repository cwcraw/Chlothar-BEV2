require('dotenv').config();
config = require('../config')

module.exports = {
  client: process.env.CLIENT || 'pg',
  connection:   {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds/'
  }
};
