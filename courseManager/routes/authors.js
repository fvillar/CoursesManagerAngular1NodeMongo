var express = require('express');
var router = express.Router();

//////////////////////////////////
//          /authors            //
//////////////////////////////////

// MongoDB
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/courses', ['unique', 'authors']);

router.get('/', function (req, res) {
    db.authors.find({}, function (err, authors) {
        res.send(authors);
    });
});

router.get('/:id', function (req, res) {
    db.authors.find({ Id: parseInt(req.params.id) }, function (err, author) {
        res.send(author);
    });
});


module.exports = router;