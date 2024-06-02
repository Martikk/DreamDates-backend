exports.up = function(knex) {
    return knex.schema.createTable('reviews', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('email').notNullable();
      table.string('professional');
      table.text('comments');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('reviews');
  };
  