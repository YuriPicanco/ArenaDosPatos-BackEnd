const { Router } = require("express");
const FieldsController = require("../controller/fields.controller.js");

const route = Router();
const controller = new FieldsController();

route.get("/fields/", (req, res) => {
  controller.getAll(req, res);
});

route.get("/fields/:id", (req, res) => {
  controller.getById(req, res);
});

route.post("/fields/", (req, res) => {
  controller.createRegister(req, res);
});

route.put("/fields/:id", (req, res) => {
  controller.updateRegister(req, res);
});

route.delete("/fields/", (req, res) => {
  controller.deleteAll(req, res);
});

route.delete("/fields/:id", (req, res) => {
  controller.deleteRegister(req, res);
});

module.exports = route;
