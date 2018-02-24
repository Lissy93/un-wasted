var express = require('express');
var router = express.Router();
var fs = require('fs');

const FoodItemModel = require('./../models/food-item');

router.post('/', function(req, res, next) {

    const foodItem = req.body;

    console.log(foodItem);

    FoodItemModel.create(foodItem, function (err, savedFoodItem) {

        var message = '';

        if (err){
            message = 'Failed to save item :(';
        }
        else{
            message = foodItem.name + ' was successfully saved :)';
        }

        res.send({ message: message, foodItem: savedFoodItem, error: err });
    });

});

module.exports = router;
