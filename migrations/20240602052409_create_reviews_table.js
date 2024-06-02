exports.up = function(knex) {
  return knex.schema.createTable('reviews', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('email').notNullable();
    table.integer('professional').notNullable();
    table.text('comments');
    table.string('platform').defaultTo('Website');
    table.string('avatar').defaultTo('https://res.cloudinary.com/dzytbkc5l/image/upload/v1717317138/DreamDate/iconavatar_qpt2h1.png');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};
