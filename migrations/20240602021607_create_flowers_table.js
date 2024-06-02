exports.up = function(knex) {
    return knex.schema.createTable('flowers', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('price').notNullable();
      table.float('rating').notNullable();
      table.integer('reviews').notNullable();
      table.string('img').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('flowers');
  };
  