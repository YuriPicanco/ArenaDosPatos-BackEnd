const Hash = require("../middlewares/hash.js");
const Services = require("./Services.js");

class UserService extends Services {
  constructor() {
    super("User");
  }

  async getAll({ limite, pagina }) {
    try {
      return await this.dataSource[this.model]
        .find()
        .skip((pagina - 1) * limite)
        .limit(limite)
        .select("id name email imageUrl");
    } catch (err) {
      console.error(
        `Erro ao obter a lista de registro de ${this.model}: ${err}`
      );
    }
  }

  async getByOne(id) {
    try {
      return await this.dataSource[this.model]
        .findOne({ _id: id })
        .select("id name email imageUrl schedules");
    } catch (err) {
      console.error(`Erro ao obter registro de ${this.model}: ${err}`);
    }
  }

  async findByName(name) {
    try {
      return await this.dataSource[this.model].find({ name: name });
    } catch (err) {
      console.error(`Erro ao obter registro de ${this.model}: ${err}`);
    }
  }
}
module.exports = UserService;
