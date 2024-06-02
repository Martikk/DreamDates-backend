exports.up = function(knex) {
    return knex.schema.createTable('contact_info', table => {
      table.increments('id').primary();
      table.string('type').notNullable();
      table.string('value').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('contact_info');
  };
  