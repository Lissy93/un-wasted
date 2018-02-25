const express = require('express');
const router = express.Router();
const apn = require('apn');

const credentials = require('../config/credentials');

/**
 * Called when a receiver wants to begin the
 * transaction process with the seller
 */
router.post('/', function(req, res, next) {

    const foodItem = req.body.foodItem; // Gets the JSON input
    const recipient = req.body.recipient; // Gets the JSON input

    const apnsToken = foodItem.provider.apns_token;


    const options = {
        token: {
            key: __dirname+"/../config/AuthKey_JJJBSW793V.p8",
            keyId: "JJJBSW793V",
            teamId: "YT2Y5MZ29S"
        },
        production: false
    };

    const apnProvider = new apn.Provider(options);

    const note = new apn.Notification();

    note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
    note.badge = 3;
    note.sound = "ping.aiff";
    note.alert = recipient.name+" would like your "+foodItem.name;
    note.payload = {'messageFrom': recipient.name};
    note.topic = "com.startHack2018.Un-Wasted";

    apnProvider.send(note, apnsToken).then( (result) => {
        console.log("Notification sent");
    });


    // Send confirmation response, or suitable error message
    res.send({ todo: true });
});

module.exports = router;
