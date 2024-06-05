const { Router } = require("express");
const userRoute = require("./src/routes/user.route.js");
const schedulingRoute = require("./src/routes/scheduling.route.js");
const fieldsRoute = require("./src/routes/fields.route.js");
const login = require("./src/routes/auth.route.js");
const authMiddleware = require("./src/middlewares/auth.js");

const router = Router();
router.use(login);
router.use(userRoute, schedulingRoute, fieldsRoute);

module.exports = router;
