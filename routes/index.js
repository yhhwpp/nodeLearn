var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(1);
    console.log(2);
    res.render('index', {title: 'Express'});
});

module.exports = router;
