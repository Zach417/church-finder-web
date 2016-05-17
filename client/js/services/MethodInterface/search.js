var $ = require('jquery');

function Search() {

	this.root = "/methods/search/";

	return {
		execute: function (callback) {
			 $.getJSON({
				 	url: this.root,
				 	success: function(data){
				 		callback(data);
				    },
					error: function (xhr, ajaxOptions, thrownError) {
						console.log("XHR Status:", xhr.status);
						console.log("Thrown Error:", thrownError);
					}
		    });
		}.bind(this),

		executeOne: function (id, callback) {
			 $.getJSON({
				 	url: this.root + id,
				 	success: function(data){
				 		callback(data);
				    },
					error: function (xhr, ajaxOptions, thrownError) {
						console.log("XHR Status:", xhr.status);
						console.log("Thrown Error:", thrownError);
					}
		    });
		}.bind(this),
	}
}

module.exports = Search;
