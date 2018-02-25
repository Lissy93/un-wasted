const express = require('express');
const router = express.Router();

/**
 * Called when a receiver wants to begin the
 * transaction process with the seller
 */
router.post('/', function(req, res, next) {

    const foodItem = req.body; // Gets the JSON input

    // TODO here we will make the blockchain calls

    // Send confirmation response, or suitable error message
    res.send({ todo: true });
});

module.exports = router;
