
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
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('Tasks', tbl => {
        tbl.increments();
        tbl.string('description', 128).notNullable();
        tbl.string('notes', 128);
        tbl.bool('completed', false).notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Tasks')
    .dropTableIfExists('Resources')
    .dropTableIfExists('Projects')
};
