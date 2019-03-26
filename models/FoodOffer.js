const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const stringToObjectId = string => mongoose.Types.ObjectId(string);

const foodOfferSchema = new Schema(
  {
    groceryItem: {
      type: Schema.Types.ObjectId,
      ref: "groceryitems",
      set: stringToObjectId
    },
    foodSupplier: {
      type: Schema.Types.ObjectId,
      ref: "users",
      set: stringToObjectId
    },
    amount: Number,
    expiryDate: Date,
    img: String,
    description: String
  },
  {
    timestamps: true
  }
);

const FoodOffer = mongoose.model("foodoffers", foodOfferSchema);

module.exports = FoodOffer;
