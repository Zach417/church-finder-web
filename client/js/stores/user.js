var StoreTemplate = require('./template');
var StoreInterface = require('../services/StoreInterface');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/user');

var UserStore = new StoreTemplate(StoreInterface.users);

AppDispatcher.register(function(action) {
	switch(action.actionType) {
		case Constants.USER_UPDATE:
			UserStore.update(action.doc, function(data) {
				UserStore.emitChange();
			});
			break;
	}
});

module.exports = UserStore;
