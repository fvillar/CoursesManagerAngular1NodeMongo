var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/courses', function (req, res, next) {
    db.courses.find({}, function (err, courses) {
        res.send(courses);
    });
});

module.exports = router;