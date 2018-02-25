var express = require('express');
var router = express.Router();

/**
 * Endpoint called by a receiver, once they have got their items
 * This verifies an finalises the transaction on the blockchain
 */
router.post('/', function(req, res, next) {

    const foodItem = req.body; // Gets the JSON input

    // TODO here we will make the blockchain calls

    // Send confirmation response, or suitable error message
    res.send({ todo: true });

});

module.exports = router;
