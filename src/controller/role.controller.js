const RoleService = require("../services/role.service.js");
const Controller = require("./Controller.js");

const roleService = new RoleService();

class RoleController extends Controller {
  constructor() {
    super(roleService);
  }
}

module.exports = RoleController;
