import test from 'ava';

import { makeServer, request } from './util.js';

test('creating a todo', async t => {
  const server = makeServer();
  const res = await request(server).post('/todos', {
    description: 'My First Todo'
  });

  t.is(res.status, 201);
  t.is(res.data.description, 'My First Todo');
});

test('retrieving todos at /todos', async t => {
  const server = makeServer();
  const created = await request(server).post('/todos', {
    description: 'My First Todo'
  });

  const res = await request(server).get('/todos');
  t.is(res.status, 200);
  t.is(res.data[created.data.id].description, 'My First Todo');
});

test('deleting a todo at /todo/:id', async t => {
  const server = makeServer();
  const created = await request(server).post('/todos', {
    description: 'My First Todo'
  });

  const deleted = await request(server).delete(`/todos/${created.data.id}`);
  t.is(deleted.status, 200);
  t.is(deleted.data, 'My First Todo');

  const list = await request(server).get('/todos');
  t.is(list.status, 200);
  t.is(list.data, []);
});
