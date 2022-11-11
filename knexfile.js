// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      user: 'mike',
      password: process.env.PASSWORD,
      database: 'Pizza'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'Pizza_migrations'
    }
  },

};
