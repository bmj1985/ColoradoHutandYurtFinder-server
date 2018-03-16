const express = require('express');

const router = express.Router();

const hutQueries = require('../queries/hutqueries');
const userQueries = require('../queries/userqueries');

function isValidId(request, response, next) {
  if (!isNaN(request.params.id)) return next();
  next(new Error('Invalid ID'));
}

router.get('/huts', (request, response, next) => {
  hutQueries
    .listHuts()
    .then((hutsAndYurts) => {
      response.json({ hutsAndYurts });
    })
    .catch(next);
});

router.get('/huts/:id', isValidId, (request, response, next) => {
  hutQueries
    .readHuts(request.params.id)
    .then((hut) => {
      hut
        ? response.json({ hut })
        : response.status(404).json({ message: 'Not found' });
    })
    .catch(next);
});

router.post('/huts', (request, response, next) => {
  hutQueries
    .createHuts(request.body)
    .then((hut) => {
      response.status(201).json({ hut });
    })
    .catch(next);
});

router.delete('/huts/:id', isValidId, (request, response, next) => {
  hutQueries
    .deleteHuts(request.params.id)
    .then(() => {
      response.status(204).json({ deleted: true });
    })
    .catch(next);
});

router.put('/huts/:id', isValidId, (request, response, next) => {
  hutQueries
    .updateHuts(request.params.id, request.body)
    .then((hut) => {
      response.json({ hut });
    })
    .catch(next);
});

router.get('/users', (request, response, next) => {
  userQueries
    .listUsers()
    .then((hutsAndYurts) => {
      response.json({ hutsAndYurts });
    })
    .catch(next);
});

router.get('/users/:id', isValidId, (request, response, next) => {
  userQueries
    .readUsers(request.params.id)
    .then((hut) => {
      hut
        ? response.json({
          hut,
        })
        : response.status(404).json({ message: 'Not found' });
    })
    .catch(next);
});

router.post('/users', (request, response, next) => {
  userQueries
    .createUsers(request.body)
    .then((hut) => {
      response.status(201).json({ hut });
    })
    .catch(next);
});

router.delete('/users/:id', isValidId, (request, response, next) => {
  userQueries
    .deleteUsers(request.params.id)
    .then(() => {
      response.status(204).json({ deleted: true });
    })
    .catch(next);
});

router.put('/users/:id', isValidId, (request, response, next) => {
  userQueries
    .updateUsers(request.params.id, request.body)
    .then((hut) => {
      response.json({ hut });
    })
    .catch(next);
});

module.exports = router;
