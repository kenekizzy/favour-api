const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required"],
    },
    email: {
      type: String,
      required: [true, "email field is required"],
    },

    message: {
      type: String,
      required: [true, "message was not sent by user"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
