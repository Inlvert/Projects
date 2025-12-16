const { Model } = require("mongoose");
const User = require("../models");
const jwt = require("jsonwebtoken");
const CONSTANTS = require("../constants");


module.exports.getUserByGoogleId = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, CONSTANTS.JWT_SECRET);
    const userId = decoded.id;

    const user = await User.findById(userId).select("-__v -_id -googleId");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ data: user });
  } catch (error) {
    next(error);
  }
};
