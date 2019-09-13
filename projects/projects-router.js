const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.findProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });
  

  router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  
router.get('/tasks', (req, res) => {
    Projects.findTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  router.get('/:id', (req, res) => {
      const { id } = req.params;

    Projects.findById(id)
    .then(project => {
        if (project) {
          res.json(project);
        } else {
          res.status(404).json({ message: 'Could not find project with given id.' })
        }
      })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });
  
router.get('/:id/resources', (req, res) => {
    const { id } = req.params;


});

module.exports = router;