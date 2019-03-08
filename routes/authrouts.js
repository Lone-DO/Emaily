const passport = require("passport");

module.exports = app => {
  //_______Google Authentication_______
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      // Options below are required when making request to google API
      // Scope, inquires the profile ID & User's Email
      // Prompt, inquires the user to select which account to utilize
      scope: ["profile", "email"],
      prompt: "select_account"
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/auth/google" }),
    (req, res) => {
      // Successful authentication, redirect to Dashboard.
      res.redirect("/surveys");
    }
  );
  //end googleAuth

  //_______Github Authentication_______
  app.get(
    "/auth/github",
    passport.authenticate("github", { scope: ["user:email"] })
  );

  app.get(
    "/auth/github/callback",
    passport.authenticate("github", { failureRedirect: "/auth/github" }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect("/");
    }
  );
  //end githubAuth

  app.get("/api/logout", (req, res) => {
    // send request to api to clear the cache
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    // See logged in user model within the cache
    res.send(req.user);
  });
};
