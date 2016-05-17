var $ = require('jquery');
var express = require('express');
var router = express.Router();
var Church = require('../../models/church');
var User = require('../../models/user');

var invalidRequest = function (res) {
  return res.status(401).json({
    success: false,
    message: "Authentication error."
  });
}

router.get('/', function (req, res) {
  var userId = req.session.userId;

  if (!userId) { return invalidRequest(res); }

	User
		.findOne({"_id": userId})
		.exec(function (err, user) {
      if (err || !user) { return invalidRequest(res); }
      Church
        .find()
        .exec(function (err, churches) {
          if (err || !churches) { return invalidRequest(res); }
          var result = [];
          churches.map(function (church,i) {
            var match = 0;
            user.questions.map(function (userQuestion) {
              var churchQuestion = church.questions.find(function (q) {
                return q.questionId == userQuestion.questionId;
              });
              if (churchQuestion && churchQuestion.answer == userQuestion.answer) {
                match++;
              }
            });
            church._doc.match = match / user.questions.length
            result.push(church._doc);
          });
          result = result.sort(function (a, b) {
            return b.match - a.match;
          }).slice(0,49);
          res.json(result);
        });
		});
});

router.get('/:id', function (req, res) {
  var id = req.params.id;
  var userId = req.session.userId;

  if (!userId || ! id) { return invalidRequest(res); }

	User
		.findOne({"_id": userId})
		.exec(function (err, user) {
      if (err || !user) { return invalidRequest(res); }
      Church
    		.findOne({"_id": id})
        .exec(function (err, church) {
          var match = 0;
          user.questions.map(function (userQuestion) {
            var churchQuestion = church.questions.find(function (q) {
              return q.questionId == userQuestion.questionId;
            });
            if (churchQuestion && churchQuestion.answer == userQuestion.answer) {
              match++;
            }
          });
          church._doc.match = match / user.questions.length
          return res.json(church._doc);
        });
		});
});

module.exports = router;
