const usersRouter = require('./users.route');

function route(app) {
  app.use('/api/users', usersRouter);
}

module.exports = route;
