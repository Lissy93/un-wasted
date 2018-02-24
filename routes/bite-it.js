var express = require('express');
var router = express.Router();
var fs = require('fs');


/* POST users listing. */
router.post('/', function(req, res, next) {

    console.log("biting it");

    const foodItem = req.body.foodItem;

    // TODO here we do stuff with the foodItem object.
    // TODO blockchain things
    // TODO send push notification


    // Send confirmation response, in return
    res.send({ itemSaved: true, foodItem: foodItem });

});

module.exports = router;
