// Update with your config settings.
require('dotenv').config();


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

	development: {
	// 	client: 'pg',
	// 	connection: { host: 'this-is-b.cyndowqeicjd.us-east-1.rds.amazonaws.com',
	// 	user: 'mike',
	// 	port: process.env.PORT,
	// 	password: process.env.PASSWORD,
	// 	database: 'this-is-b',
	// 	},
	// 	pool: {
	// 	min: 2,
	// 	max: 10
	// },
	client:'postgres',
		connection: {
		host: 'this-is-b.cyndowqeicjd.us-east-1.rds.amazonaws.com',
		port: process.env.POSTGRES_PORT,
		database: 'postgres',
		user: 'mike',
		password: process.env.PASSWORD
		},
		acquireConnectionTimeout: 1000000,
		pool: {
		min: 0,
		max: 1,
		acquireTimeoutMillis: 300000,
		createTimeoutMillis: 300000,
		destroyTimeoutMillis: 300000,
		idleTimeoutMillis: 30000,
		reapIntervalMillis:1000,
		createRetryIntervalMillis: 2000
		},
		debug: false,
	},

	migrations: {
		tableName: 'Pizza_migrations'
		}
}


// host=zia-lucia.postgres.database.azure.com port=5432 dbname={your_database} user=mike password={your_password} sslmode=require