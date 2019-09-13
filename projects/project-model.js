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

function findResources() {
    return db('Resources');
}

function findTasks() {
    return db('Tasks');
}


function findById(id) {
    return db('Projects').where({ id }).first();
}

// function findResources(id) {
//     return db('resources as r')
//     .join('')
// }

