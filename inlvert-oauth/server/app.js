const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routers");
const session = require("express-session");

require("./config/passport");
const passport = require("passport");


app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

module.exports = app;
