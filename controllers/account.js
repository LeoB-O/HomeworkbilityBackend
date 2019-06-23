const User = require('../models/User');
const code = require('../code');

module.exports = {
  async login (req, res, next) {
    let username = req.body.username || '';
    let password = req.body.password || '';
    
    let user = await User.findOne({username: username});

    if (!user || !user.validPassword(password)) {
      next({name: 'PasswordError', msg: 'Password Error!'});
      return;
    }

    let jwt = res.jwt({
      name: user.name,
      username: user.username,
      permission: user.permission
    });

    res.data.data = {
      token: jwt.token,
      name: user.name,
      username: user.username,
      permission: user.permission
    }

    res.sendData();
  },
  logout(req, res) {
    res.sendData();
  },
  getInfo(req, res) {
    res.data.data = {
      name: req.jwt.payload.name,
      username: req.jwt.payload.username,
      permission: req.jwt.payload.permission
    };
    res.sendData();
  }
}