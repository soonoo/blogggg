const express = require('express');
const path = require('path');
const morgan = require('morgan');
const posts = require('./routes/post');
const next = require('next');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.NODE_ENV !== 'production' ? 5000 : 80;
const app = next({ dev })
const handle = app.getRequestHandler();

const server = express();


app.prepare()
  .then((req, res) => {
    server.use(morgan('tiny'));
    server.use('/api/post', posts.router);
    server.use(cookieParser());

    server.get('/write', (req, res) => {
      return app.render(req, res, `/write`);
    });

    server.get('/[0-9]+', (req, res) => {
      return app.render(req, res, `/p`, req.path);
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, () => { console.log(`listening on port ${port}`); });
  })
  .catch(e => console.log(e));