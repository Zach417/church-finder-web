var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/user');

var UserActions = {
	saveUser: function(doc) {
		AppDispatcher.dispatch({
			actionType: Constants.USER_UPDATE,
			doc: doc
		});
	}
};

module.exports = UserActions;
