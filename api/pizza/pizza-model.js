const db = require('../../db')

function find(){
	return db("Pizza")
		.select("*")
}

function findBy(filter){
	console.log(filter)
	console.log("in the findBy")
	return db("Pizza")
		.select("*")
		.where(filter)
}

function findById(id){
	console.log("in the model findById", id)
	return db("Pizza")
		.select("*")
		.where({ id })
		.first()
}
function findByType(type){
	console.log(type)
	console.log("in the findBy")
	return db("Pizza")
		.select("*")
		.where({type})
}

async function add(Pizza){
	console.log("in the model add", Pizza)
	const [id] = await db("Pizza").insert(Pizza, "id")
	console.log(id)
	return findById(id);
}

const remove = (id) =>{
	console.log('deelte id', id)
    return db('Pizza')
    .where({id})
    .del()
}

const update = (id, changes) => {
    return db('Pizza')
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
	findByType
}