var Model = require('../../models/church');
var RestFilter = require('../../components/RestFilter');
var UserSecurity = require('../../components/UserSecurity');

var readFilterSchema = {
  "title": "User Schema",
  "type": "object",
  "properties": {
		"_id": { "type":"string" },
		"name": { "type":"string" },
		"phone": { "type":"string" },
		"email": { "type":"string" },
		"addressLine1": { "type":"string" },
		"addressLine2": { "type":"string" },
		"city": { "type":"string" },
		"state": { "type":"string" },
		"zip": { "type":"string" },
    "contact": {
      "type": "object",
      "properties": {
        "name": { "type":"string" },
        "title": { "type":"string" },
        "phone": { "type":"string" },
        "email": { "type":"string" },
      },
    },
    "facebookPage": { "type":"string" },
    "religion": { "type":"string" },
    "classification": { "type":"string" },
    "denomination": { "type":"string" },
		"questions": {
      "type":"array",
      "items": {
        "type":"object",
        "properties": {
          "questionId": { "type":"string" },
          "answer": { "type":"string" },
        },
      },
    },
    "originYear": { "type":"string" },
    "members": { "type":"string" },
    "isActive": { "type":"string" },
		"createdOn": { "type":"date" },
		"modifiedOn": { "type":"date" },
	},
}

var writeFilterSchema = {
  "title": "User Schema",
  "type": "object",
  "properties": {
    "name": { "type":"string" },
    "phone": { "type":"string" },
    "email": { "type":"string" },
    "addressLine1": { "type":"string" },
    "addressLine2": { "type":"string" },
    "city": { "type":"string" },
    "state": { "type":"string" },
    "zip": { "type":"string" },
    "contact": {
      "type": "object",
      "properties": {
        "name": { "type":"string" },
        "title": { "type":"string" },
        "phone": { "type":"string" },
        "email": { "type":"string" },
      },
    },
    "facebookPage": { "type":"string" },
    "religion": { "type":"string" },
    "classification": { "type":"string" },
    "denomination": { "type":"string" },
    "questions": {
      "type":"array",
      "items": {
        "type":"object",
        "properties": {
          "questionId": { "type":"string" },
          "answer": { "type":"string" },
        },
      },
    },
    "originYear": { "type":"string" },
    "members": { "type":"string" },
    "isActive": { "type":"string" },
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
	path : "/church",
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
