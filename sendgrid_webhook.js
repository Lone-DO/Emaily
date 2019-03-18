var localtunnel = require("localtunnel");

localtunnel(5000, { subdomain: "lonedo" }, function(err, tunnel) {
  console.log("LT running");
});
