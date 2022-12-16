const db = require('../../db')

function find(){
	return db("Toppings")
		.select("*")
}

function findBy(filter){
	console.log(filter)
	console.log("in the findBy")
	return db("Toppings")
		.select("*")
		.where(filter)
}



function findById(id){
	return db("Toppings")
		.select("*")
		.where({ id })
		.first()
}

async function add(Toppings){
	const [id] = await db("Toppings").insert(Toppings, "id")
	return findById(id);
}

const remove = (id) =>{
    return db('Toppings')
    .where({id})
    .del()
}

const update = (id, changes) => {
    return db('Toppings')
    .where({id})
    .update(changes, '*')
}

module.exports = {
    add,
    findById,
	findBy,
    find,
    update, 
    remove,
}