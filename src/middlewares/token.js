const {
  createCipheriv,
  randomBytes,
  createDecipheriv,
  generateKeyPairSync,
  createSign,
  createVerify,
} = require("crypto");

class User {
  constructor(nome) {
    this.nome = nome;
    this._chave = randomBytes(32);
    this._vi = randomBytes(16);
    this._alg = "aes256";
  }

  submitCipherMessage = (message) => {
    const cifra = createCipheriv(this._alg, this._chave, this._vi);

    return cifra.update(message, "utf-8", "hex") + cifra.final("hex");
  };

  retriverDecipherMessage = (message) => {
    const decipher = createDecipheriv(this._alg, this._chave, this._vi);

    return decipher.update(message, "hex", "utf-8") + decipher.final("utf-8");
  };

  submitTokenCipher = (message) => {
    const { privateKey, publicKey } = generateKeyPairSync("rsa", {
      modulusLength: 2048,

      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privaKeyEncoding: {
        type: "pkcs8",
        format: "pem",
      },
    });

    const assinador = createSign("rsa-sha256");

    assinador.update(message);

    const assinatura = assinador.sign(privateKey, "hex");

    console.log("Assinatura: ", assinatura);

    const verificador = createVerify("rsa-sha256");

    verificador.update(message);

    const verificado = verificador.verify(publicKey, assinatura, "hex");

    console.log(verificado);
  };
}

const message = "Mensagem aleatória";

const user = new User("Yuri");

// const cipherMessage = user.submitCipherMessage(message);
// console.log("Mensagem Cifrada:", cipherMessage);

// const decipherMessage = user.retriverDecipherMessage(cipherMessage);
// console.log("Mensagem Decifrada:", decipherMessage.toString("utf-8"));

user.submitTokenCipher(message);
