const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const stringToObjectId = string => mongoose.Types.ObjectId(string);

const foodRequestSchema = new Schema(
  {
    groceryItem: {
      type: Schema.Types.ObjectId,
      ref: "groceryitems",
      set: stringToObjectId
    },
    foodConsumer: {
      type: Schema.Types.ObjectId,
      ref: "users",
      set: stringToObjectId
    },
    acceptedBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
      set: stringToObjectId
    },
    acceptedAt: Date,
    amount: Number,
    img: String,
    description: String
  },
  {
    timestamps: true
  }
);

const FoodOffer = mongoose.model("foodrequests", foodRequestSchema);

module.exports = FoodOffer;
