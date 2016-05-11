var restful = require('node-restful');
var mongoose = restful.mongoose;

var schema = new mongoose.Schema({
  name: String, //The bible is asdflasdjfalskdfj
  religion: String, //christian
  category: String, //doctrine
});

module.exports = restful.model('Question', schema);
