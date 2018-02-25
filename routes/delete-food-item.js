const express = require('express');
const router = express.Router();

const FoodItemModel = require('./../models/food-item');

/**
 * Endpoint to delete a food item from the database
 */
router.post('/', function(req, res) {
    FoodItemModel.findByIdAndRemove(req.params.id, (err, food) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Food item successfully deleted",
            id: food._id
        };
        return res.status(200).send(response);
    });
});

module.exports = router;
