var restful = require('node-restful');
var mongoose = restful.mongoose;

var userSchema = new mongoose.Schema({
  sessionId: String,
  questions: [{
    questionId: String,
    answer: String,
  }],
  createdOn: Date,
  modifiedOn: Date,
});

module.exports = restful.model('User', userSchema);
