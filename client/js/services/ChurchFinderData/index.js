var $ = require('jquery');
var Slave = require('./Slave');

var Service = {
  users: new Slave("user"),
}

module.exports = Service;
