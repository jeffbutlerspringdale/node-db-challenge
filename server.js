const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

//test get
server.get('/api/projects', (req, res) => {
    // get all species from the database
    db('Projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

//WORRRRRking

module.exports = server;