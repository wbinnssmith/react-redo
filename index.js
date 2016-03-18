process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = require('./server/app').default;
app.listen(3000, () => console.log('started'));
