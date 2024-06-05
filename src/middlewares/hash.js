const { randomBytes, scryptSync } = require("crypto");
class Hash {
  static createPassHash = (senha) => {
    const salt = Hash._createSalt();
    const hashPassword = scryptSync(senha, salt, 64).toString();

    return [salt, hashPassword];
  };

  static hashCompare = (senha, salt, hashPassword) => {
    return scryptSync(senha, salt, 64).toString();
  };

  static _createSalt = () => {
    return randomBytes(16).toString("hex");
  };
}

module.exports = Hash;
