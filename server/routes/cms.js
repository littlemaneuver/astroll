let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
  var locale = req.getLocale();
  var localesFileLocation = '../locales/' + locale + '.json';
  res.json(require(localesFileLocation));
});


module.exports = router;