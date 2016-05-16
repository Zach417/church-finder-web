var express = require('express');
var router = express.Router();

router.use(require('./user'));
router.use(require('./question'));
router.use(require('./church'));
router.use(require('./denomination'));

module.exports = router;
