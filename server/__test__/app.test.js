import test from 'ava';
import request from 'supertest';

import app from '../app';
const agent = request.agent(app);

test.cb('retrieving /', t => {
  const res = agent
    .get('/')
    .expect(404, /what are you up to tody\?/)
    .end(t.end)
});
