var StoreTemplate = require('./Template');
var ChurchFinderDataService = require('../services/ChurchFinderData');
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/UserConstants.js');

var UserStore = new StoreTemplate(ChurchFinderDataService.users);

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
