
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        { resource_name: 'testing seed resources', description: 'testing seed description resources' },
      ]);
    });
};