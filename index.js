const express = require('express')
const server = express()
const cors = require('cors')


server.use(express.json())
server.use(cors())

server.get('/', (req,res) => res.json({message:'This better work'}))
server_port = process.env.PORT || 8000
server.listen( server_port, () => {
    console.log(`Server listening on port ${server_port} `)
})