var StoreTemplate = require('./template');
var StoreInterface = require('../services/StoreInterface');

var QuestionStore = new StoreTemplate(StoreInterface.questions);

module.exports = QuestionStore;
