const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'mike',
    port: process.env.PORT,
    password: process.env.PASSWORD,
    database: 'postgres'

})

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});