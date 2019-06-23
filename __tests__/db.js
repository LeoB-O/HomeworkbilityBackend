const mongoose = require('mongoose');

const User = require('../models/User');
const credentials = require('../credentials');

beforeEach(() => {
  mongoose.connect(credentials.mongodb.url);
});

test('user table has admin', async (done) => {
  await User.deleteOne();
  let admin = new User({name: '刘波波', username: '3160608005', password: '123456', permission: ['admin', 'normal']});
  admin.save((err, admin) => {
    expect(!err).toBeTruthy();
    done();
  });
});