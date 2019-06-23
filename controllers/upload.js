const credentials = require('../credentials');
const Homework = require('../models/Homework');

module.exports = {
  async upload(req, res) {
    let originName = req.files.file.name;
    let homeworkID = req.body.id;
    let fileID = req.body.fileID;
    let homework = await Homework.findById(homeworkID);
    let username = req.jwt.payload.username;
    let name = req.body.name;
    let file = homework.files.filter(v => v.id==fileID || v.name==name)[0];
    let ext = originName.slice(originName.lastIndexOf('.'));
    let path = `/${homeworkID}/${username}/${username+req.jwt.payload.name}-${name+ext}`;

    if(!file.uploaded.some(v => v==username)) {
      homework.files[homework.files.indexOf(file)].uploaded.push(username);
      await homework.save();
    }

    req.files.file.mv(credentials.upload.baseDir+path, err => {
      res.data.data = {name: `${username+req.jwt.payload.name}-${name+ext}`};
      res.sendData();
    });
  }
}