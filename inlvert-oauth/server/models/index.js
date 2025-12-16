const mongoose = require("mongoose");
const CONSTANTS = require("../constants");
const User = require("./user");

async function connectToDB() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(CONSTANTS.MONGODB_URI);
}

connectToDB().catch((err) => console.log(err));

module.exports = {
  User,
  connectToDB
};
