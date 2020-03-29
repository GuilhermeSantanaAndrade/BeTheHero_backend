const routes = require("express").Router();
const controllerOngs = require("../controllers/controllerOng");
const {
  validation_delete,
  validation_update,
  validation_list,
  validation_create
} = require("./routesOng.schema");

routes.get("/:id", validation_list, controllerOngs.list);

routes.get("/", controllerOngs.listAll);

routes.post("/", validation_create, controllerOngs.create);

routes.put("/:id", validation_update, controllerOngs.update);

routes.delete("/:id", validation_delete, controllerOngs.delete);

module.exports = routes;
