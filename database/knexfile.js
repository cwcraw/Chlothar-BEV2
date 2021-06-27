module.exports = {
  client: 'pg',
  connection:  {user: 'postgres', database: 'chlothar', password: 'postgres'},
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