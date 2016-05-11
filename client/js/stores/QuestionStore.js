var StoreTemplate = require('./Template');
var ChurchFinderDataService = require('../services/ChurchFinderData');

var QuestionStore = new StoreTemplate(ChurchFinderDataService.questions);

module.exports = QuestionStore;
