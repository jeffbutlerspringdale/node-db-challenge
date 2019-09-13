exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        { description: 'testing seed tasks', notes: 'testing seed notes tasks', completed: true, project_id: 1},
      ]);
    });
};