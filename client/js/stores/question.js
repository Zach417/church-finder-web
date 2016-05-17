var StoreTemplate = require('./template');
var StoreInterface = require('../services/StoreInterface');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/question');

var Store = new StoreTemplate(StoreInterface.questions);

AppDispatcher.register(function(action) {
	switch(action.actionType) {

		case Constants.QUESTION_CREATE:
			Store.insert(action.doc, function(data) {
				Store.emitChange();
			});
			break;

		case Constants.QUESTION_UPDATE:
			Store.update(action.doc, function(data) {
				Store.emitChange();
			});
			break;

		case Constants.QUESTION_DESTROY:
			Store.delete(action.doc, function(data) {
				Store.emitChange();
			});
			break;
	}
});

module.exports = Store;
