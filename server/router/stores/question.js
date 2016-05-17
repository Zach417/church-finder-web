var Model = require('../../models/question');
var RestFilter = require('../../components/RestFilter');
var UserSecurity = require('../../components/UserSecurity');

var readFilterSchema = {
  "title": "User Schema",
  "type": "object",
  "properties": {
		"_id": { "type":"string" },
		"name": { "type":"string" },
		"religion": { "type":"string" },
		"category": { "type":"string" },
	},
}

var writeFilterSchema = {
  "title": "User Schema",
  "type": "object",
  "properties": {
    "name": { "type":"string" },
    "religion": { "type":"string" },
    "category": { "type":"string" },
  },
}

function findOne (user, id, callback) {
	Model
		.findOne({"_id": id})
		.exec(function (err, result) {
			return callback(result);
		});
}

function findMany (user, callback) {
	Model
		.find()
		.exec(function (err, result) {
			return callback(result);
		});
}

module.exports = new RestFilter({
	path : "/question",
	model: Model,
	readFilterSchema: readFilterSchema,
	writeFilterSchema: writeFilterSchema,
	findOne: findOne,
	findMany: findMany,
	securityRoles: {
		create: UserSecurity.isAdmin,
		read: UserSecurity.isActiveUser,
		update: UserSecurity.isAdmin,
		destroy: UserSecurity.isAdmin,
	}
});
