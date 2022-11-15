// Update with your config settings.
require('dotenv').config();


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: 'postgresql',
  connection: process.env.CONNECTION,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'Pizza_migrations'
  }
};

// host=zia-lucia.postgres.database.azure.com port=5432 dbname={your_database} user=mike password={your_password} sslmode=require