const {Client} = require('pg')

const client = new Client({
    host: 'zia-lucia.postgres.database.azure.com',
    user: 'mike',
    port: process.env.PORT,
    password: process.env.PASSWORD,
    database: 'postgres',
    sslmode:'require'

})
// 68.99.241.218 public range ip address 
// host=zia-lucia.postgres.database.azure.com port=5432 dbname={your_database} user=mike password={your_password} sslmode=require

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

