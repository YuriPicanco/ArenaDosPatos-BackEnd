const PermissionService = require("../services/permission.service");
const Controller = require("./Controller");

const permissionService = new PermissionService();

class PermissionController extends Controller {
  constructor() {
    super(permissionService);
  }
}

module.exports = PermissionController;
