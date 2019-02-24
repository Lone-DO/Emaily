const passport = require("passport");

module.exports = app => {
  //Google Authentication
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
  //end googleAuth

  //Github Authentication
  app.get(
    "/auth/github",
    passport.authenticate("github", { scope: ["user:email"] })
  );

  app.get(
    "/auth/github/callback",
    passport.authenticate("github", { failureRedirect: "/login" }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect("/");
    }
  );
  //end githubAuth

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
