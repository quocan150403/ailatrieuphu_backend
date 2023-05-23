const usersRouter = require('./users.route');
const categoriesRouter = require('./categories.route');
const productsRouter = require('./products.route');
const authRouter = require('./auth.route');

function route(app) {
  app.use('/api/auth', authRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/categories', categoriesRouter);
  app.use('/api/products', productsRouter);
}

module.exports = route;
