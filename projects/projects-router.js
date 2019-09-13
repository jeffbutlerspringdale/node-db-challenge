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
  

  router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    Projects.findResources(id)
    .then(resources => {
      if (resources.length) {
        res.json(resources);
      } else {
        res.status(404).json({ message: 'Could not find steps for given source' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

  router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.findTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res.status(404).json({ message: 'Could not find tasks for given source' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
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
  
router.post('/', (req, res) => {
  const postData = req.body;

  Projects.add(postData)
  .then(newProject => {
    res.status(201).json(newProject);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});

router.post('/:id/tasks', (req, res) => {
  const taskData = req.body;
  const { id } = req.params; 

  Projects.findById(id)
  .then(task => {
    if (task) {
      Projects.addTask(taskData, id)
      .then(task => {
        res.status(201).json(task);
      })
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.update(id, changes)

  .then(project => {
    if (project) {
      res.json({ updated: project });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update project' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find project with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete scheme' });
  });
});

module.exports = router;