exports.up = function(knex) {
    return knex.schema.createTable('form_submissions', function(table) {
      table.increments('id').primary(); // Primary key
      table.string('firstname').notNullable(); // First name
      table.string('email').notNullable(); // Email
      table.string('phone').notNullable(); // Phone number
      table.timestamps(true, true); // Created at and updated at timestamps
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('form_submissions'); // Drop table on rollback
  };
  