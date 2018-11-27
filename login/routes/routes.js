let express = require('express');
let router = express.Router();
let controllers = require('.././controllers');

router.get('/', controllers.HomeController.index);

module.exports = router;
