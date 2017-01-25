var express = require('express');
var router = express.Router();

//////////////////////////////////
//          /courses            //
//////////////////////////////////

// MongoDB
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/courses', ['courses', 'unique', 'authors']);

/* GET home page. */
router.get('/', function (req, res, next) {
    db.courses.find({}, function (err, courses) {
        res.send(courses);
    });
});

module.exports = router;