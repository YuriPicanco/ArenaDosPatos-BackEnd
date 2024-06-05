const Controller = require("./Controller.js");
const UserService = require("../services/user.service.js");
const Hash = require("../middlewares/hash.js");
const AuthController = require("./auth.controller.js");

const userService = new UserService();

class UserController extends Controller {
  constructor() {
    super(userService);
  }
  async getAll(req, res) {
    let { limite = 10, pagina = 1 } = req.query;
    limite = parseInt(limite);
    pagina = parseInt(pagina);

    try {
      const registerList = await this.service.getAll({ limite, pagina });

      if (!registerList)
        return res.status(404).json({ MESSAGE: `Lista de Vazia` });

      res.status(200).json({ registerList });
    } catch (err) {
      res.status(500).json({
        message: `ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`,
      });
    }
  }

  async createRegister(req, res, next) {
    try {
      const payload = req.body;
      const [salt, hashPassword] = Hash.createPassHash(payload.password);
      const password = hashPassword;

      const newRegister = await this.service.createRegister({
        ...payload,
        salt,
        password,
      });

      res.status(201).json(newRegister);
    } catch (err) {
      res.status(500).json({
        message: `ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`,
      });
    }
  }

  async searchUserByName(req, res) {
    const { name } = req.query;
    const regex = new RegExp(name, "i");

    try {
      const userList = await this.service.findByName(regex);

      res.status(201).json(userList);
    } catch (err) {
      res.status(500).json({
        message: `ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`,
      });
    }
  }
}

module.exports = UserController;
