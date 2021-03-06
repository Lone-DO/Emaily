const proxy = require("http-proxy-middleware");
const local = "http://localhost:5000";

module.exports = function(app) {
  app.use(proxy("/auth/*", { target: "http://localhost:5000" }));
  app.use(proxy("/auth/google/callback", { target: "http://localhost:5000" }));
  app.use(proxy("/api/*", { target: "http://localhost:5000" }));
  app.use(proxy("/api/surveys/*", { target: "http://localhost:5000" }));
  app.use(proxy("/api/surveys/*/*", { target: "http://localhost:5000" }));
};
