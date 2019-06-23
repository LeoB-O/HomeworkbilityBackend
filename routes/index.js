const express = require('express');
const router = express.Router();
const jwt = require('jwt-express');

const accountRouter = require('./account');
const adminRouter = require('./admin');

const index = require('../controllers/index');
const homework = require('../controllers/homework');
const account = require('../controllers/account');
const upload = require('../controllers/upload');

router.get('/', index.helloworld);
router.post('/login', account.login);
router.post('/logout', account.logout);
router.post('/upload', jwt.active(), upload.upload);

router.get('/homeworks', homework.getAllHomeworks);
router.get('/homework/id', homework.getHomeworkById);

router.use('/account', jwt.active(), accountRouter);
router.use('/admin', jwt.active(), adminRouter);

module.exports = router;