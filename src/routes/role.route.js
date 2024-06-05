const { Router } = require("express");
const RoleController = require("../controller/role.controller.js");

const route = Router();
const controller = new RoleController();

route
  .get("/role", (req, res) => controller.getAll(req, res))
  .get("/role/:id", (req, res) => controller.getById(req, res))
  .post("/role", (req, res) => controller.createRegister(req, res))
  .put("/role/:id", (req, res) => controller.updateRegister(req, res))
  .delete("/role/:id", (req, res) => controller.deleteRegister(req, res));

module.exports = route;
