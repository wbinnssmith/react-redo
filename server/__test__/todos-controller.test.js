import test from 'ava';

import { makeServer, resetDb, request } from './_util';

test.beforeEach(() => resetDb());

test('creating a todo', async t => {
  const server = makeServer();
  const res = await request(server).post('/api/v1/todos', {
    description: 'My First Todo'
  });

  t.is(res.status, 201);
  t.is(res.data.description, 'My First Todo');
});

test('retrieving todos at /todos', async t => {
  const server = makeServer();
  const created = await request(server).post('/api/v1/todos', {
    description: 'My First Todo'
  });

  const res = await request(server).get('/api/v1/todos');
  t.is(res.status, 200);
  t.is(res.data[0].description, 'My First Todo');
});

test('deleting a todo at /todo/:id', async t => {
  await resetDb();
  const server = makeServer();
  const created = await request(server).post('/api/v1/todos', {
    description: 'My First Todo'
  });

  const deleted = await request(server).delete(`/api/v1/todos/${created.data.id}`);
  t.is(deleted.status, 200);

  const list = await request(server).get('/api/v1/todos');
  t.is(list.status, 200);
  t.same(list.data, []);
});
