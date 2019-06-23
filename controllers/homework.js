const Homework = require('../models/Homework');

module.exports = {
  async addHomework(req, res) {
    let title = req.body.title || '';
    let className = req.body.class || '';
    let deadline = req.body.deadline && new Date(req.body.deadline) || new Date();
    let picture = req.body.picture || '';
    let content = req.body.content || '';
    let files = req.body.files.map(file => ({name: file, uploaded: []}));

    let homework = new Homework({
      title: title,
      class: className,
      deadline: deadline,
      picture: picture,
      content: content,
      files: files
    });
    
    await homework.save();

    res.sendData();
  },
  async getAllHomeworks(req, res) {
    let homeworks = await Homework.find();
    res.data.data = {
      homeworks: homeworks.map(v => v.toObject({getters: true}))
    };
    res.sendData();
  },
  async getHomeworkById(req, res) {
    let id = req.query.id || '';
    let homework = await Homework.findById(id);
    homework = homework.toObject({getters: true});
    homework.files = homework.files.map(file => ({
      ...file,
      status: file.uploaded.some(v => v==req.jwt.payload.username)?'已提交':'未提交'
    }));

    res.data.data = {
      homework: homework
    };

    res.sendData();
  },
  async deleteHomeworkById(req, res) {
    let id = req.query.id || '';
    let homework = await Homework.findByIdAndDelete(id);
    homework = homework.toObject({getters: true});
    res.data.data = {homework: homework};
    res.sendData();
  }
}