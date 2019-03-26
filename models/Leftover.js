const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leftoverSchema = new Schema({
    name: String,
    comment: String,
    expiryDate: Date,
    leftoverList: { type: Schema.Types.ObjectId, ref: "leftoverlists" }
})

const Leftover = mongoose.model('leftovers', leftoverSchema);

module.exports = Leftover;