const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middleWares = jsonServer.defaults();

server.use(middleWares);

server.use((req, res, next) => {
  setTimeout(next, 800);
});

const isAuthorized = (req) => {
  return req.headers.authorization;
};

server.use((req, res, next) => {
  if (!isAuthorized(req)) {
    res.status(401).jsonp({
      status: 401,
      error: '401 Unauthorized',
      message: 'Ошибка авторизации'
    });
  }

  next();
});

server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
  const { name, password } = req.body;

  const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));

  const { users } = db;

  const user = users.find((user) => user.name === name && user.password === password);

  if (user) {
    return res.status(200).jsonp(user);
  }

  return res.status(401).jsonp({
    status: 401,
    error: '401 Unauthorized',
    message: 'Ошибка авторизации'
  });
});

server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running');
});
