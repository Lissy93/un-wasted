var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET the user data. */
router.get('/', function(req, res, next) {

    fs.readFile(__dirname+'/../sample-data/sample-products-1.json', 'utf8',
        function (err, data) {
        if (err) throw err; // That's not good
        res.json(JSON.parse(data)); // Blindly parse, what we hope will be valid JSON
    });

});

module.exports = router;
