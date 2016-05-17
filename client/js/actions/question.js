var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var Constants = require('../constants/question');

var Actions = {
	update: function(doc) {
		AppDispatcher.dispatch({
			actionType: Constants.QUESTION_UPDATE,
			doc: doc
		});
	},
	create: function(doc) {
		AppDispatcher.dispatch({
			actionType: Constants.QUESTION_CREATE,
			doc: doc
		});
	},
	destroy: function(doc) {
		AppDispatcher.dispatch({
			actionType: Constants.QUESTION_DESTROY,
			doc: doc
		});
	},
};

module.exports = Actions;
