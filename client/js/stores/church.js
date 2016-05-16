var StoreTemplate = require('./template');
var StoreInterface = require('../services/StoreInterface');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/church');

var Store = new StoreTemplate(StoreInterface.churches);

AppDispatcher.register(function(action) {
	switch(action.actionType) {

		case Constants.CHURCH_CREATE:
			Store.insert(action.doc, function(data) {
				Store.emitChange();
			});
			break;

		case Constants.CHURCH_UPDATE:
			Store.update(action.doc, function(data) {
				Store.emitChange();
			});
			break;

		case Constants.CHURCH_DESTROY:
			Store.delete(action.doc, function(data) {
				Store.emitChange();
			});
			break;
	}
});

module.exports = Store;
