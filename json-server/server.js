const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./json-server/db.json');
const middleWares = jsonServer.defaults();

const isAuthorized = (req) => {
  return true;
};

server.use(middleWares);
server.use((req, res, next) => {
  if (isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});
server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running');
});
