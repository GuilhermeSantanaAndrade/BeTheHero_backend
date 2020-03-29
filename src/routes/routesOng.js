const routes = require("express").Router();
const controllerOngs = require("../controllers/controllerOng");

routes.get("/:guid", (req, res) => {
  return res.send("OK");
});

routes.get("/", (req, res) => {
  return res.send("OK");
});

routes.post("/", controllerOngs.create);

routes.put("/", (req, res) => {
  return res.send("OK");
});

routes.delete("/", (req, res) => {
  return res.send("OK");
});

module.exports = routes;
