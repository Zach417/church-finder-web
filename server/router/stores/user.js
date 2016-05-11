var User = require('../../models/user');
var RestFilter = require('../../components/RestFilter');
var UserSecurity = require('../../components/UserSecurity');

var readFilterSchema = {
  "title": "User Schema",
  "type": "object",
  "properties": {
		"_id": { "type":"string" },
		"sessionId": { "type":"string" },
		"questions": {
      "type":"array",
      "items": {
        "type":"object",
        "properties": {
          "name": { "type":"string" },
          "answer": { "type":"string" },
        },
      },
    },
		"createdOn": { "type":"date" },
		"modifiedOn": { "type":"date" },
	},
}

var writeFilterSchema = {
  "title": "User Schema",
  "type": "object",
  "properties": {
    "sessionId": { "type":"string" },
    "questions": {
      "type":"array",
      "items": {
        "type":"object",
        "properties": {
          "name": { "type":"string" },
          "answer": { "type":"string" },
        },
      },
    },
	},
}

function findOne (user, id, callback) {
	User
		.findOne({"_id": id})
		.where({
			$or: [
				{"_id": user._id},
			]
		})
		.exec(function (err, result) {
			return callback(result);
		});
}

function findMany (user, callback) {
	User
		.find()
		.where({
			$or: [
				{"_id": user._id},
			]
		})
		.exec(function (err, result) {
			return callback(result);
		});
}

module.exports = new RestFilter({
	path : "/user",
	model: User,
	readFilterSchema: readFilterSchema,
	writeFilterSchema: writeFilterSchema,
	findOne: findOne,
	findMany: findMany,
	securityRoles: {
		create: UserSecurity.isNotAllowed,
		read: UserSecurity.isActiveUser,
		update: UserSecurity.isActiveUser,
		destroy: UserSecurity.isNotAllowed,
	}
});
