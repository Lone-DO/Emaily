const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

// Avoiding Mongo 4.0 deprecation error by enabling option, useNewUrlParser
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(
  cookieSession({
    // 30 days  * 24hrs * 60min * 60sec * 1000 milisecond => converting to milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authrouts")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
