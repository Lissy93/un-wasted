const express = require('express');
const router = express.Router();

const FoodItemModel = require('./../models/food-item');

/**
 * End point for ALL food items
 */
router.get('/', function(req, res) {
    FoodItemModel.find({}, function(err, foodItems) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(foodItems);
        }
    });
});

module.exports = router;
