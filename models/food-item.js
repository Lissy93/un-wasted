const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
    name: String,
    imageURL: String,
    expiry: String,
    location: {
        lat: Number,
        lng: Number
    },
    provider: {
        name: String,
        image: String,
        apns_token: String
    }
});

const FoodItemModel = mongoose.model('FoodItemModel', FoodItemSchema );

module.exports = FoodItemModel;