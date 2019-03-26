const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groceryItemSchema = new Schema({    
    name: String,
    category: String,
    defaultImg: String,
    estimatedPrice: Number
})

const GroceryItem = mongoose.model('groceryitems', groceryItemSchema);

module.exports = GroceryItem;