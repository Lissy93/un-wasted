/**
 * Determines weather a given JSON object representing a food item
 * has got all the required, and valid-looking attributes
 * Makes a nice lil message with the results to return
 * @param foodItem
 * @returns {{isValid: boolean, message: string}}
 */
function validateFoodItem(foodItem){

    let ret = {
        isValid: true,
        message: ''
    };

    function invalidate(why){
        ret.isValid = false;
        ret.message = ` ${why}\n`;
        return ret;
    }

    function isStringOkay(str){
        if (!str) return false; // The field must be defined
        if (str.length < 1) return false; // And it can not be empty
        if (str.length > 500) return false; // Nor can it be crazy long
        return true; // The string didn't look too suspicious...
    }

    if(!foodItem){ // Stuff is really f*cked up if the input doesn't even exist
        return invalidate('No data was specified'); // (return to finish here)
    }

    if(!isStringOkay(foodItem.name)){
        invalidate('Food item name must be specified, and valid');
    }

    if(!isStringOkay(foodItem.imageURL)){
        invalidate('Food item image must be specified, and valid');
    }

    if(!Date.parse(foodItem.expiry)){
        invalidate('Food item must have a valid expiry date');
    }

    if(! ((typeof foodItem.location) === 'object')){
        invalidate('Location of food item must be specified');
    }

    if(! ((typeof foodItem.provider) === 'object')){
        invalidate('Provider of food item must be specified');
    }

    if(ret.isValid) ret.message = 'Input is valid';

    return ret;
}

module.exports = validateFoodItem;