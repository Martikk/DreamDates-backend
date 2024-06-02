exports.up = function(knex) {
    return knex.schema.createTable('social_links', table => {
      table.increments('id').primary();
      table.string('href').notNullable();
      table.string('imgSrc').notNullable();
      table.string('alt').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('social_links');
  };
  