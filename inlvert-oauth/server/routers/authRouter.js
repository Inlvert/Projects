const authRouter = require('express').Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

authRouter.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  (req, res) => {
    const user = req.user;
    const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });

    // res.redirect(`/auth/login?token=${token}`);
  }
);


module.exports = authRouter;