exports.up = function(knex) {
    return knex.schema.createTable('categories', table => {
      table.increments('id').primary();
      table.string('src').notNullable();
      table.string('caption').notNullable();
      table.string('link').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('categories');
  };
  