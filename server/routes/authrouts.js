const passport = require("passport");

module.exports = app => {
  //_______Google Authentication_______
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
  //end googleAuth

  //_______Github Authentication_______
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

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  })

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
