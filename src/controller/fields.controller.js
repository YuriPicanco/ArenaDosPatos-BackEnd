const Controller = require("./Controller.js");
const FieldsService = require("../services/fields.services.js");

const fieldsService = new FieldsService();

class FieldsController extends Controller {
  constructor() {
    super(fieldsService);
  }
}

module.exports = FieldsController;
