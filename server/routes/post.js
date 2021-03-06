const express = require('express');
const bodyParser = require('body-parser');
const { promiseQuery, transactionQuery, isValidPassword } = require('../db');

let tags;

const router = express.Router();

router.use(bodyParser.json({ limit: '5mb' }));

router.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
  });
  next();
});

// write post
router.post('/', async (req, res) => {
  if (!req.body.title || !req.body.contents) {
    return res.status(400).end();
  }
   
  const isValid = await isValidPassword(req.body.pw);
  if (!isValid) {
    return res.status(400).end();
  }

  try {
    const postQuery = await transactionQuery('INSERT INTO posts(TITLE, CONTENTS) VALUES(?, ?)',
      [req.body.title, req.body.contents]);
    const postId = postQuery.insertId;

    for(tagName of req.body.tags.split(",")) {  
      const tagQuery = await transactionQuery('INSERT INTO tags(name) VALUES(?) ON DUPLICATE KEY UPDATE name=name, id=LAST_INSERT_ID(id)',
        [tagName.trim()]);
      const realationQuery = await transactionQuery('INSERT INTO tag_info(tag_id, post_id) VALUES(?, ?) ON DUPLICATE KEY UPDATE tag_id=tag_id, post_id=post_id',
        [tagQuery.insertId, postId]);
    }

    res.send({ id: postId });
  } catch(e) {
    console.log(e);
  }
});

// modify post
router.put('/', async (req, res) => {
  if (!req.body.title || !req.body.contents) {
    return res.status(400).end();
  }

  const isValid = await isValidPassword(req.body.pw);

  if (!isValid) {
    return res.status(400).end();
  }

  const postId = req.body.id;
  try {
    const removeTags = await promiseQuery(`DELETE FROM tag_info WHERE post_id = ?`, [postId])
    const rows = await promiseQuery('UPDATE posts SET title = ?, contents = ? WHERE id = ?',
      [req.body.title, req.body.contents, postId]);

    for(tagName of req.body.tags.split(",")) {
      if (tagName === "") continue;
      const tagQuery = await transactionQuery('INSERT INTO tags(name) VALUES(?) ON DUPLICATE KEY UPDATE name=name, id=LAST_INSERT_ID(id)',
        [tagName.trim()]);
      const realationQuery = await transactionQuery('INSERT INTO tag_info(tag_id, post_id) VALUES(?, ?) ON DUPLICATE KEY UPDATE tag_id=tag_id, post_id=post_id',
        [tagQuery.insertId, postId]);
    }

    res.send({ id: postId });
  } catch (e) {
    console.log(e)
  }
});

// get post list
router.get('/list/:id?', async (req, res) => {
  let listId = req.params.id || 1;

  if (isNaN(listId)) {
    return res.status(404).end('Not found');
  }
  listId = parseInt(listId, 10);

  try {
    const rows = await promiseQuery(`
      SELECT p.id, p.title, p.post_date, GROUP_CONCAT(t.name) tags
      FROM posts p
      LEFT OUTER JOIN tag_info i ON i.post_id = p.id
      LEFT OUTER JOIN tags t ON t.id = i.tag_id
      WHERE isDeleted = 0
      GROUP BY p.id, p.title, p.post_date
      ORDER BY p.post_date DESC;
    `);

    res.send(rows)
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

// get recent post
router.get('/recent', async (req, res) => {
  try {
    const rows = await promiseQuery('SELECT * FROM posts ORDER BY ID DESC LIMIT 1')
    res.send(rows);
  } catch (e) {
    console.log(e);
  }
});


router.get('/tag', async (req, res) => {
  try {
    const rows = await promiseQuery(`
      SELECT p.id, p.title, p.post_date, GROUP_CONCAT(t.name) tags
      FROM posts p
      LEFT OUTER JOIN tag_info i ON i.post_id = p.id
      LEFT OUTER JOIN tags t ON t.id = i.tag_id
      WHERE p.id IN (
        SELECT p.id
        FROM posts p
        LEFT OUTER JOIN tag_info i ON i.post_id = p.id
        LEFT OUTER JOIN tags t ON t.id = i.tag_id
        WHERE t.name = ? AND isDeleted = 0
        ORDER BY p.post_date DESC
      )
      GROUP BY p.id, p.title, p.post_date
      ORDER BY p.post_date DESC;
    `, [encodeURI(req.query.t)]);
    res.send(rows);
  } catch(e) {
    console.log(e);
  }
});

// get post with id
router.get('/:id', async (req, res) => {
  try {
    const rows = await promiseQuery('SELECT id, title, contents, post_date FROM posts WHERE id = ? AND isDeleted = false',
      [req.params.id]);
    res.send(rows);
  } catch (e) {
    console.log(e);
  }
});

// delete post with id
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
};
