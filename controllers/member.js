const User = require('../models/User');
const code = require('../code');

module.exports = {
  async getAllMembers(req, res) {
    let members = await User.find();
    members = members.map(v => v.toObject({getters: true}));
    res.data.data = {
      members: members
    }
    res.sendData();
  },
  async addMember(req, res) {
    let username = req.body.username || '';
    let password = req.body.password || '';
    let name = req.body.name || '';
    let permission = req.body.permission || ['normal'];
    
    let user = new User({
      name: name,
      username: username,
      password: password,
      permission: permission
    });

    await user.save();

    res.sendData();
  },
  async deleteMember(req, res) {
    let id = req.query.id || '';

    let user = await User.findByIdAndDelete(id);

    res.data.data = {user: user};
    res.sendData();
  },
  async updateMember(req, res) {
    let id = req.body.id || '';
    let member = req.body.member || {};
    await User.findByIdAndUpdate(id, member);

    res.sendData();
  }
}