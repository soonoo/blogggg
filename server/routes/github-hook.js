const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const router = express.Router();
router.use(bodyParser.json({ limit: '5mb' }));

// 글 목록 가져오기
router.post('/', async (req, res) => {
  if(req.body === 'refs/heads/master') {
    res.sendStatus(200);
    exec('../deploy.sh');
  }
  else {
    res.sendStatus(202);
  }
});

module.exports = {
  router,
};

