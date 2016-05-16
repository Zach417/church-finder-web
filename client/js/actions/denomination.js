var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/denomination');

var Actions = {
	update: function(doc) {
		AppDispatcher.dispatch({
			actionType: Constants.DENOMINATION_UPDATE,
			doc: doc
		});
	},
	create: function(doc) {
		AppDispatcher.dispatch({
			actionType: Constants.DENOMINATION_CREATE,
			doc: doc
		});
	},
	destroy: function(doc) {
		AppDispatcher.dispatch({
			actionType: Constants.DENOMINATION_DESTROY,
			doc: doc
		});
	},
};

module.exports = Actions;
