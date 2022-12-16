const Pizza = require('../pizza/pizza-model')

const duplicatePizza = async (req, res, next) =>{
    try {
        const entry = await Pizza.findByType(req.body)
        if(entry === req.body){
            res.status(403).json({message: 'This Pizza already exist'})
        }
        else{
            next()

        }
    }
    catch(e) {
        res.status(500).json({message: `Sever error: ${e}`})
    }


}

module.exports ={
    duplicatePizza
}