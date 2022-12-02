const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const pizzaRouter = require('./api/pizza/pizza-router')
const toppingsRouter = require('./api/toppings/toppings-router')


server.use(express.json())
server.use(cors())
server.use('/api/pizza',pizzaRouter)
server.use('/api/toppings',toppingsRouter)



server.get('/', (req,res) => res.json({message:'This better work'}))
server.listen( PORT, () => {
    console.log(`Server listening on PORT ${PORT} `)
})