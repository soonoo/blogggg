const express = require('express');
const path = require('path');
const morgan = require('morgan');
const next = require('next');
const bodyParser = require('body-parser');

// routers
const posts = require('./routes/post');
const points = require('./routes/points');
const hook = require('./routes/github-hook');

const dev = process.env.NODE_ENV !== 'production'
const port = 8080;
const app = next({ dev })
const handle = app.getRequestHandler();

const server = express();

app.prepare()
  .then((req, res) => { 
    server.use(morgan('tiny'));
    server.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

    server.use('/github-hook', hook.router);

    server.use('/api/post', posts.router);
    server.use('/api/points', points.router);

    server.get('/point/write', (req, res) => {
      return app.render(req, res, '/point');
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
