/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('Toppings', tbl => {
        tbl.increments("id");
        tbl.string('type', 128)
        tbl.string('amount')
        tbl.boolean('buy_more')
        tbl.timestamps(true, true)

})
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('toppings');


};
