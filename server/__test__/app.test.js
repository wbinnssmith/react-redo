import test from 'ava';

import { makeServer, request } from './util.js';

test('retrieving /', async t => {
  const server = makeServer();
  const res = await request(server).get('/');
  t.ok(res.status, 404);
  t.ok(res.data, /what are you up to today\?/);
});
