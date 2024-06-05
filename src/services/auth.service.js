const Hash = require("../middlewares/hash.js");
const User = require("../models/User.js");
const { sign } = require("jsonwebtoken");

const { config: dotenvConfig } = require("dotenv");

dotenvConfig();

class AuthService {
  async login(payload) {
    const usuario = await User.findOne({ email: payload.email }).select(
      "id name email password salt role"
    );

    if (!usuario) throw new Error("Usuário não cadastrado");

    if (!Hash.hashCompare(payload.password, usuario.salt, usuario.password))
      throw new Error("Usuário ou senha inválido");

    const accessToken = sign(
      {
        id: usuario.id,
        name: usuario.name,
        email: usuario.email,
        role: usuario.role,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: 86400,
      }
    );

    const infoUser = { id: usuario.id, name: usuario.name, role: usuario.role };
    return {
      accessToken,
      infoUser,
    };
  }
}

module.exports = AuthService;
