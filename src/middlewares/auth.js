const { verify, decode } = require("jsonwebtoken");
const { config: dotenvConfig } = require("dotenv");

dotenvConfig();

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) res.status(401).json({ message: "Token não informado" });

  const [, accessToken] = token.split(" ");

  try {
    verify(accessToken, process.env.SECRET_KEY);

    const { id, email } = decode(accessToken);
    req.id = id;
    req.email = email;

    next();
  } catch (err) {
    res.status(401).json({ message: "Usuário nao autorizado" });
  }
};
