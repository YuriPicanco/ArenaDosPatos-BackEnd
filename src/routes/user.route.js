const { Router } = require("express");
const UserController = require("../controller/user.controller.js");

const route = Router();
const controller = new UserController();

route
  .get("/user/", (req, res) => {
    controller.getAll(req, res);
  })
  .get("/user/busca", (req, res) => {
    controller.searchUserByName(req, res);
  })
  .get("/user/:id", (req, res) => {
    controller.getById(req, res);
  })
  .post("/user/", (req, res, next) => {
    controller.createRegister(req, res, next);
  })
  .put("/user/:id", (req, res) => {
    controller.updateRegister(req, res);
  })
  .delete("/user/", (req, res) => {
    controller.deleteAll(req, res);
  })
  .delete("/user/:id", (req, res) => {
    controller.deleteRegister(req, res);
  });

module.exports = route;
