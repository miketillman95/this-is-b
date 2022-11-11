const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'mike',
    port: 5432,
    password: process.env.PASSWORD,
    database: 'Pizza'

})

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});