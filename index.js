const express = require('express')
const server = express()
const cors = require('cors')
server_port = process.env.PORT || 8000
const pizzaRouter = require('./api/pizza/pizza-router')
const toppingsRouter = require('./api/toppings/toppings-router')


server.use(express.json())
server.use(cors())
server.use('/api/pizza',pizzaRouter)
server.use('/api/toppings',toppingsRouter)



server.get('/', (req,res) => res.json({message:'This better work'}))
server.listen( server_port, () => {
    console.log(`Server listening on port ${server_port} `)
})