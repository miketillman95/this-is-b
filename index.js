const express = require('express')
const server = express()
server.get('/', (req,res) => res.json({message:'This better work'}))
server_port = process.env.PORT || 8000
server.listen( server_port, () => {
    console.log(`Server listening on port ${server_port} `)
})