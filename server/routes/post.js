const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const sha512 = require('js-sha512');

let tags;

const router = express.Router();

let connection;
function handleConnection() {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gkak2m7!',
    database: 'blog',
    timezone: 'UTC',
  });

  connection.connect(err => {
    if(err) {
      cosole.log('db connection error: ', err);
      setTimeout(handleConnection, 2000);
    }
  });

  connection.on('error', (err) => {
    console.log('db error: ', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    }
  });
}

handleConnection();

connection.connect((err) => {
  if (err) console.log(err.code, err.fatal);
});

(async function initTags() {
  tags = await promiseQuery('SELECT tag FROM post_tags');
})();


function promiseQuery(...args) {
  return new Promise((resolve, reject) => {
    connection.query(...args, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}

async function isValidPassword(pwQuery) {
  const userPw = sha512(pwQuery).toUpperCase();
  const pw = await promiseQuery('SELECT password FROM pw');

  return userPw === pw[0].password;
}

router.use(bodyParser.json({ limit: '5mb' }));
router.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

router.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  next();
});

router.post('/', async (req, res) => {
  if (!req.body.title || !req.body.contents) {
    return res.status(400).end();
  }
  
  console.log(req.body.tags.split(','));

  const isValid = await isValidPassword(req.body.pw);
  if (!isValid) {
    return res.status(400).end();
  }

  try {
    const rows = await promiseQuery('INSERT INTO posts(TITLE, CONTENTS) VALUES(?, ?)',
      [req.body.title, req.body.contents]);
    res.send({ id: rows.insertId });
  } catch(e) {
    console.log(e);
  }
});

router.put('/', async (req, res) => {
  if (!req.body.title || !req.body.contents) {
    return res.status(400).end();
  }

  const isValid = await isValidPassword(req.body.pw);

  if (!isValid) {
    return res.status(400).end();
  }

  try {
    const rows = await promiseQuery('UPDATE posts SET title = ?, contents = ? WHERE id = ?',
      [req.body.title, req.body.contents, parseInt(req.body.id)]);
    res.send({ id: req.body.id });
  } catch (e) {
    console.log(e)
  }
});

router.get('/list/:id?', async (req, res) => {
  let listId = req.params.id || 1;

  if (isNaN(listId)) {
    return res.status(404).end('Not found');
  }
  listId = parseInt(listId, 10);

  try {
    const rows = await promiseQuery('SELECT id, title, post_date FROM posts WHERE isDeleted = false ORDER BY ID DESC LIMIT ?, 10',
      [10 * (listId - 1)]);

    res.send(rows)
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

router.get('/recent', async (req, res) => {
  try {
    const rows = awaitpromiseQuery('SELECT * FROM posts ORDER BY ID DESC LIMIT 1')
    res.send(rows);
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const rows = await promiseQuery('SELECT id, title, contents, post_date FROM posts WHERE id = ? AND isDeleted = false',
      [req.params.id]);
    res.send(rows);
  } catch (e) {
    console.log(e);
  }
});

router.delete('/:id', async (req, res) => {
  const isValid = await isValidPassword(req.body.pw);

  if (!isValid) {
    return res.status(400).end();
  }

  try {
    const rows = await promiseQuery('UPDATE posts SET isDeleted = true WHERE id = ?', [req.params.id]);
    res.send(rows)
  } catch(e) {
    console.log(e);
  }
});

module.exports = {
  router,
  connection
};