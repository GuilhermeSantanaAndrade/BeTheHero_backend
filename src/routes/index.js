const mainRoutes = require("express").Router();
const ong = require("./routesOng");
const session = require("./routesSession");

mainRoutes.use("/ong", ong);
mainRoutes.use("/session", session);
mainRoutes.get("/", (req, res) => {
  return res.send("Be The Hero API");
});

module.exports = mainRoutes;
