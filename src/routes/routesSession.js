const routes = require("express").Router();

routes.get("/", (req, res, next) => {
  return res.send("OK");
});

module.exports = routes;
