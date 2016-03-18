import app from '../app';
import axios from 'axios';

function makeServer() {
  return app.listen(0);
}

function request(server) {
  const address = server.address();

  return axios.create({
    baseURL: `http://127.0.0.1:${address.port}`,
    timeout: 2000,
  });
}
