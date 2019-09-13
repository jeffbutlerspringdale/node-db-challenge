
exports.up = function(knex) {
    return knex.schema.createTable('Projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128).notNullable();
        tbl.string('description', 128);
        tbl.bool('completed', false);
    })
    .createTable('Resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128).notNullable();
        tbl.string('description', 128);
    })
    .createTable('Tasks', tbl => {
        tbl.increments();
        tbl.string('description', 128).notNullable();
        tbl.string('notes', 128);
        tbl.bool('completed', false).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Tasks')
    .dropTableIfExists('Resources')
    .dropTableIfExists('Projects')
};
