require('dotenv').config();
config = require('../config')
console.log(config.db.connection)
module.exports = {
  client: process.env.CLIENT || 'pg',
  connection:  config.db.connection,
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
