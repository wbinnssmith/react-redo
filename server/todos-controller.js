import express from 'express';
import bodyParser from 'body-parser';
import validator from 'express-validator';
import statuses from 'http-status-codes';

import Todo from './todo';

const todos = express();
todos.use(bodyParser.json());
todos.use(validator());

todos.param('id', function(req, res, next, id) {
  new Todo({ id }).fetch()
    .then(todo => {
      req.todo = todo;
      next();
    })
    .catch(e => {
      res.status(statuses.UNPROCESSABLE_ENTITY);
      next(e);
    })
})

todos.get('/', function getTodos(req, res) {
  Todo.fetchAll().then(todos => {
    res.json(todos);
  })
});

todos.post('/', function addTodo(req, res) {
  const { description } = req.body;
  new Todo({ description }).save().then(todo => {
    res.status(statuses.CREATED);
    res.json(todo);
  });
});

todos.patch('/:id', function updateTodo(req, res) {
  req.sanitizeBody('description').toString();
  req.sanitizeBody('completed_at').toDate();

  req.todo.save(req.params).then(todo => {
    res.json(todo);
  })
});

export default todos;
