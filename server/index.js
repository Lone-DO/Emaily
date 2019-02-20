const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = requrie('./config/keys');

const app = express();

passport.use(new GoogleStrategy(
  clientID: keys.googleClient,
  clientSecret: keys.googleSecret,
  callbackURL: '/auth/google/callback'
));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
