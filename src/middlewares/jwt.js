const jwt = require("jsonwebtoken");

const secretKey = "ChaveSecreta";

const token = jwt.sign(
  {
    apelido: "jim",
    curso: "segurança",
  },
  secretKey
);

console.log(token);

const tokenDecode = jwt.verify(token, secretKey);

console.log(tokenDecode);
