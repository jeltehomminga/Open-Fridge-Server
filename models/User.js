const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const stringToObjectId = string => mongoose.Types.ObjectId(string);

const userSchema = new Schema(
  {
    username: String,
    password: String,
    foodSupplier: Boolean,
    foodConsumer: Boolean,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    funFact: String,
    img: String,
    foodRequests: [ {
        type: Schema.Types.ObjectId,
        ref: "foodrequests",
        set: stringToObjectId
      }]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
