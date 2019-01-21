const express = require('express');
const bodyParser = require('body-parser');
const { promiseQuery, transactionQuery } = require('../db');

const router = express.Router();
router.use(bodyParser.json({ limit: '5mb' }));

// 글 목록 가져오기
router.get('/list', async (req, res) => {
  const list = await promiseQuery('SELECT * FROM points ORDER BY create_at DESC');

  res.send(list);
});

// 글 작성
router.post('/', async (req, res) => {
  const { title, contents, } = req.body;
  const { insertId, } = await promiseQuery('INSERT INTO points(title, contents) VALUES(? , ?)', [title, contents]);

  res.send(`${insertId}`);
});

module.exports = {
  router,
};

