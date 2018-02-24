var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET users listing. */
router.get('/', function(req, res, next) {

    var sampleData;
    fs.readFile(__dirname+'/../sample-data/sample-products-1.json', 'utf8', function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });

});

module.exports = router;
