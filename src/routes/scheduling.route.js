const { Router } = require("express");
const SchedulingControler = require("../controller/scheduling.controller.js");

const route = Router();
const controller = new SchedulingControler();

route
  .get("/scheduling/graphic", (req, res) => {
    controller.getSchedulingByGraphic(req, res);
  })
  .get("/scheduling", (req, res) => {
    controller.getAll(req, res);
  })
  .get("/scheduling/:id", (req, res) => {
    controller.getById(req, res);
  })
  .get("/schedulingbyuser/:userId", (req, res) =>
    controller.getAllSchedulesByUserId(req, res)
  )
  .post("/scheduling/", (req, res) => {
    controller.createRegister(req, res);
  })
  .put("/scheduling/:id", (req, res) => {
    controller.updateRegister(req, res);
  })
  .delete("/scheduling/", (req, res) => {
    controller.deleteAll(req, res);
  })
  .delete("/scheduling/:id", (req, res) => {
    controller.deleteRegister(req, res);
  });

module.exports = route;
