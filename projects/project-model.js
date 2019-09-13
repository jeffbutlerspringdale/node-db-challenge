const db = require('../data/db-config.js');

module.exports = {
    findProjects,
    findById,
    findResources,
    findTasks,
};

function findProjects() {
    return db('Projects');
}

function findResources(project_id) {
    return db('Projects as p')
    .join('Resources as r', 'p.id', 'r.project_id')
    .select('p.id', 'r.resource_name', 'r.id', 'r.description')
    .orderBy('r.id')
    .where({ project_id })
}

function findTasks(project_id) {
    return db('Projects as p')
    .join('Tasks as t', 'p.id', 't.project_id')
    .select('p.id', 't.id', 't.description', 't.notes', 't.completed')
    .orderBy('t.id')
    .where({ project_id })
}


function findById(id) {
    return db('Projects').where({ id }).first();
}

