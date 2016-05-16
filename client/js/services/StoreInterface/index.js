var $ = require('jquery');
var Slave = require('./Slave');

var Service = {
  users: new Slave("user"),
  questions: new Slave("question"),
  denominations: new Slave("denomination"),
  churches: new Slave("church"),
}

module.exports = Service;
