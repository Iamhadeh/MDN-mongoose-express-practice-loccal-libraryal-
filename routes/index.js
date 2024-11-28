var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* mongodb+srv://princeadewrites:<7h3b7hjANUE9yfs9>@cluster0.pxydv.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0 */

