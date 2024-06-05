const { Router } = require("express");
const AuthController = require("../controller/auth.controller.js");

const router = Router();

router
  .post("/auth/login", (req, res) => AuthController.login(req, res))
  .get("admin/dashboard", AuthController.isAdmin);

module.exports = router;
