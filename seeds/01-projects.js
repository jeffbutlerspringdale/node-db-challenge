
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        { project_name: 'testing seed', description: 'testing seed description', completed: true},
      ]);
    });
};
