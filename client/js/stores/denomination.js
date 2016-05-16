var StoreTemplate = require('./template');
var StoreInterface = require('../services/StoreInterface');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/denomination');

var Store = new StoreTemplate(StoreInterface.denominations);

AppDispatcher.register(function(action) {
	switch(action.actionType) {

		case Constants.DENOMINATION_CREATE:
			Store.insert(action.doc, function(data) {
				Store.emitChange();
			});
			break;

		case Constants.DENOMINATION_UPDATE:
			Store.update(action.doc, function(data) {
				Store.emitChange();
			});
			break;

		case Constants.DENOMINATION_DESTROY:
			Store.delete(action.doc, function(data) {
				Store.emitChange();
			});
			break;
	}
});

module.exports = Store;
