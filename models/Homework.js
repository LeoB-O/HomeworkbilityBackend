const mongoose = require('mongoose');

const homeworkSchema = new mongoose.Schema({
  title: String,
  class: String,
  date: {type: Date, default: new Date()},
  deadline: Date,
  picture: String,
  content: String,
  files: [{
    name: String,
    uploaded: [String]
  }]
});

const Homework = mongoose.model('Homework', homeworkSchema);

module.exports = Homework;