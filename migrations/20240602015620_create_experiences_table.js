exports.up = function(knex) {
    return knex.schema.createTable('experiences', table => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.string('imageUrl').notNullable();
      table.json('included').notNullable();
      table.json('extras').notNullable();
      table.string('location').notNullable();
      table.integer('price').notNullable();
      table.string('booking').notNullable();
      table.json('details').notNullable();
      table.json('videos').notNullable();
      table.json('images').notNullable();
      table.json('categories').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('experiences');
  };
  