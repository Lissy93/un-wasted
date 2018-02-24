var express = require('express');
var router = express.Router();
var fs = require('fs');


/* POST users listing. */
router.post('/', function(req, res, next) {

    console.log("about to confirm the bite....");

    const foodItem = req.body.foodItem;

    // TODO here we need to confirm with the blockchain that this has taken place

    // Send confirmation response, in return
    res.send({ itemConfirmed: true, foodItem: foodItem });

});

module.exports = router;
