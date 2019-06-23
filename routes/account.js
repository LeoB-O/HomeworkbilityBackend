const express = require('express');
const router = express.Router();

const account = require('../controllers/account');

router.get('/', function (req, res) {
  res.send('hello account');
});

router.get('/info', account.getInfo);

module.exports = router;