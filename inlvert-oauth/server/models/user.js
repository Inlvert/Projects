const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;