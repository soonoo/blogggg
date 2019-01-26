const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const router = express.Router();
router.use(bodyParser.json({ limit: '5mb' }));

router.post('/', async (req, res) => {
  if(req.body.ref === 'refs/heads/master') {
    res.sendStatus(200);

    // deploy-blog.sh should be in $PATH
    spawn('deploy-blog', [], {
      //detached: true,
      stdio: 'inherit',
    });
  }
  else {
    res.sendStatus(202);
  }
});

module.exports = {
  router,
};

