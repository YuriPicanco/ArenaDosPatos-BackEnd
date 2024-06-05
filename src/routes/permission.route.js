const { Router } = require("express");
const PermissionController = require("../controller/permission.controller");

const router = Router();
const controller = new PermissionController();

router
  .get("/permission", (req, res) => controller.getAll(req, res))
  .get("/permission/:id", (req, res) => controller.getByOne(req, res))
  .post("/permission", (req, res) => {
    controller.createRegister(req, res);
  })
  .put("/permission/:id", (req, res) => controller.updateRegister(req, res))
  .delete("/permission/:id", (req, res) => controller.deleteRegister(req, res));

module.exports = router;
