var $ = require('jquery');
var Slave = require('./Slave');

var Service = {
  users: new Slave("user"),
  questions: new Slave("question"),
}

module.exports = Service;
