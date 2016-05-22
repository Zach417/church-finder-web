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

function answerToScale (answer) {
  switch (answer) {
    case "Strongly Agree": return 5;
    case "Agree": return 4;
    case "Neutral": return 3;
    case "Disagree": return 2;
    case "Strongly Disagree": return 1;
    default: return 0;
  }
}

router.get('/', function (req, res) {
  var userId = req.session.userId;

  if (!userId) { return invalidRequest(res); }

	User
		.findOne({"_id": userId})
		.exec(function (err, user) {
      if (err || !user) { return invalidRequest(res); }
      Church
        .find({
          city: user.city,
          state: user.state,
        })
        .exec(function (err, churches) {
          if (err || !churches) { return invalidRequest(res); }
          var result = [];
          churches.map(function (church,i) {
            var difference = 0;
            user.questions.map(function (userQuestion) {
              var churchQuestion = church.questions.find(function (q) {
                return q.questionId == userQuestion.questionId;
              });
              if (!churchQuestion) {
                difference = difference + 4;
              } else {
                var churchAnswerScore = answerToScale(churchQuestion.answer);
                var userAnswerScore = answerToScale(userQuestion.answer);
                difference = difference + Math.abs(churchAnswerScore - userAnswerScore);
              }
            });
            church._doc.match = ((user.questions.length * 4) - difference)
            / (user.questions.length * 4)
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
          var difference = 0;
          user.questions.map(function (userQuestion) {
            var churchQuestion = church.questions.find(function (q) {
              return q.questionId == userQuestion.questionId;
            });
            if (!churchQuestion) {
              difference = difference + 4;
            } else {
              var churchAnswerScore = answerToScale(churchQuestion.answer);
              var userAnswerScore = answerToScale(userQuestion.answer);
              difference = difference + Math.abs(churchAnswerScore - userAnswerScore);
            }
          });
          church._doc.match = ((user.questions.length * 4) - difference) / (user.questions.length * 4)
          return res.json(church._doc);
        });
		});
});

module.exports = router;
