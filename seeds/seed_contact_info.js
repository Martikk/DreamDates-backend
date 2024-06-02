exports.seed = function(knex) {
  return knex('contact_info').del()
    .then(function () {
      return knex('contact_info').insert([
        { type: "phone", value: "+1778-386-2132" },
        { type: "phone", value: "+0000-000-0000" }
      ]);
    });
};
