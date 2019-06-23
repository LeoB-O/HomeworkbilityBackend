const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const jwt = require('jwt-express');
const cors = require('cors');

const routes = require('./routes/index');
const logger = require('./utils/logger');
const code = require('./code');
const credentials = require('./credentials');
const initResponse = require('./middleware/initResponse');

mongoose.connect(credentials.mongodb.url, credentials.mongodb.options);

db.on('error', console.error.bind(console, 'Database connection error: '));
db.once('open', ()=> {console.log('Database connected!')});

app.use(logger);
app.use(initResponse);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload(credentials.upload.options));
app.use(cors(credentials.cors.options));
app.use(jwt.init(credentials.jwt.secret, credentials.jwt.options));

app.use('/', routes);

// 错误处理
app.use((err, req, res, next) => {
  let error = err.name;
  res.data.success = false;

  switch (error) {
    case 'JWTExpressError':
      res.data.code = code.INVALID_JWT;
      res.data.msg = '登陆失效，请重新登录';
      break;
    case 'PasswordError':
      res.data.code = code.PASSWORD_ERROR;
      res.data.msg = '用户名/密码错误';
      break;
    default:
      res.data.code = code.ERROR;
      res.data.msg = JSON.stringify(err);
      break;
  }
  console.log(JSON.stringify(err));
  res.sendData();
})

app.listen(3000, () => {console.log('listen on port: 3000')});