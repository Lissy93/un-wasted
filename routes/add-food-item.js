const express = require('express');
const router = express.Router();

const FoodItemModel = require('./../models/food-item');

const validateFoodItem = require('./../helpers/validate-input');

/**
 * Endpoint to add a food item into the Mongo
 * It calls to validate helper functions
 * And if there is an error, then a message gets made
 */
router.post('/', function(req, res) {

    const foodItem = req.body;

    const validationResults = validateFoodItem(foodItem);

    let message = '';

    if(!validationResults.isValid){
        res.send({
            message: 'Failed to save item, due to input error.',
            insertResults: validationResults,
        });
    }

    else { // Input was correct, so proceed

        FoodItemModel.create(foodItem, function (err) {

            if (err) {
                message = 'Failed to save item :(';
            }
            else {
                message = foodItem.name + ' was successfully saved';
            }

            validationResults.error = err;

            res.send({
                message: message,
                insertResults: validationResults,
            });
        });

    }

});

module.exports = router;
