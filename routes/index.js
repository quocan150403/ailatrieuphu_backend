const usersRouter = require('./users.route');
const questionsRouter = require('./questions.route');
const typesRouter = require('./types.route');
const authRouter = require('./auth.route');
const gameRouter = require('./game.route');
const awardsRouter = require('./awards.route');

function route(app) {
  app.use('/api/auth', authRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/questions', questionsRouter);
  app.use('/api/types', typesRouter);
  app.use('/api/game', gameRouter);
  app.use('/api/awards', awardsRouter);
}

module.exports = route;
