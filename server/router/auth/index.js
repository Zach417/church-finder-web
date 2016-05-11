var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.use(function(req, res, next) {
  User.findOne({
    "sessionId":req.sessionID
  }, function(err, user) {
    if (err) { throw err; }
    if (!user) {
      var user = new User();
      user.sessionId = req.sessionID;
      user.save();
    }
    req.session.userId = user._id;
  });
  next();
});

module.exports = router;
