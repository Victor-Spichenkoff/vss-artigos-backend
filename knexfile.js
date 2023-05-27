// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


const { db } = process.env.db//require('./.env')

const url = process.env.URL
module.exports = {
    client: 'postgresql',
    connection: {
      host: url,
      database: 'postgres',
      user:     'postgres',
      password: 'pituca'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
