const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const sha512 = require('js-sha512');

const router = express.Router();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gkak2m7!',
  database: 'blog',
  timezone: 'UTC',
});

connection.connect((err) => {
  if (err) console.log(err.code, err.fatal);
});

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

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
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

  const isValid = await isValidPassword(req.body.pw);

  if (!isValid) {
    return res.status(400).end();
  } else {
    promiseQuery('INSERT INTO posts(TITLE, CONTENTS) VALUES(?, ?)',
      [req.body.title, req.body.contents])
      .then((rows) => { res.send({ id: rows.insertId }); })
      .catch(e => console.log(e));
  }
});

router.put('/', async (req, res) => {
  if (!req.body.title || !req.body.contents) {
    return res.status(400).end();
  }

  const isValid = await isValidPassword(req.body.pw);

  if (!isValid) {
    return res.status(400).end();
  } else {
    promiseQuery('UPDATE posts SET title = ?, contents = ? WHERE id = ?',
      [req.body.title, req.body.contents, parseInt(req.body.id)])
      .then((rows) => { res.send({ id: req.body.id }); })
      .catch(e => console.log(e));
  }
});

router.get('/list/:id?', (req, res) => {
  let listId = req.params.id || 1;

  if (isNaN(listId)) {
    res.status(404).end('Not found');
  } else {
    listId = parseInt(listId, 10);

    promiseQuery('SELECT id, title, post_date FROM posts WHERE isDeleted = false ORDER BY ID DESC LIMIT ?, 10', [10 * (listId - 1)])
      .then(rows => {
        rows.map(item => {
          item.contents = escape(item.contents);
        });
        return rows;
      })
      .then((rows) => res.send(rows))
      .catch((e) => {
        console.log(e);
        res.status(500).end();
      });
  }
});

router.get('/recent', (req, res) => {
  promiseQuery('SELECT * FROM posts ORDER BY ID DESC LIMIT 1')
    .then((rows) => { res.send(rows); })
    .catch((e) => { console.log(e); });
});

router.get('/:id', (req, res) => {
  promiseQuery('SELECT id, title, contents, post_date FROM posts WHERE id = ? AND isDeleted = false', [req.params.id])
    .then((rows) => {
      rows.map(item => {
        item.contents = escape(item.contents);
      });
      res.send(rows);
    })
    .catch((e) => { console.log(e); });
});

router.delete('/:id', async (req, res) => {
  const isValid = await isValidPassword(req.body.pw);

  if (!isValid) {
    return res.status(400).end();
  } else {
    promiseQuery('UPDATE posts SET isDeleted = true WHERE id = ?', [req.params.id])
    .then((rows) =>
      res.send(rows)
    )
    .catch((e) => { console.log(e); });
  }
});

module.exports = {
  router,
  connection
};