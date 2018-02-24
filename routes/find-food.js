var express = require('express');
var router = express.Router();
var fs = require('fs');

const FoodItemModel = require('./../models/food-item');


/* Get all food */
router.get('/', function(req, res, next) {
    FoodItemModel.find({}, function(err, foodItems) {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(foodItems);
            }
        });
});


// /* Get some hard-coded JSON data... */
// router.get('/', function(req, res, next) {
//     fs.readFile(__dirname+'/../sample-data/sample-products-1.json', 'utf8',
//         function (err, data) {
//         if (err) throw err; // That's not good
//         res.json(JSON.parse(data)); // Blindly parse, what we hope will be valid JSON
//     });
// });

module.exports = router;
