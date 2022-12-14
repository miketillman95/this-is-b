/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Toppings').del()
  await knex('Toppings').insert([
    { type: 'pepperoni', amount: 10, buy_more: false },
    { type: 'onions', amount: 10, buy_more: false },
    { type: 'jalapeno', amount: 0, buy_more: true },
  ]);
};

