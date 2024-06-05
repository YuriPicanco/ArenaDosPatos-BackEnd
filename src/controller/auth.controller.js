const AuthService = require("../services/auth.service.js");

const authService = new AuthService();

class AuthController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const response = await authService.login({
        email,
        password,
      });

      const { accessToken, infoUser } = response;

      if (!accessToken)
        return res.status(400).json({ Message: "Problema na autenticação" });

      res.status(200).send({ accessToken: accessToken, infoUser: infoUser });
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    }
  }
  static async isAdmin(req, res, next) {
    if (!req.user || !req.user.isAdmin) {
      return res
        .status(403)
        .json({ message: "Acesso negado. Você não é um administrador." });
    }
    next();
  }
}

module.exports = AuthController;
