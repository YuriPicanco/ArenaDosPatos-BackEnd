const Services = require("./Services");

class RoleService extends Services {
  constructor() {
    super("Role");
  }

  async createRegister(payload) {
    try {
      const register = await this.dataSource[this.model].findOne({
        name: payload.name,
      });

      if (register) throw new Error("Role já cadastrada");

      const newRegister = await this.dataSource[this.model](payload);

      return newRegister.save();
    } catch (err) {
      console.error(`Erro ao criar registro de ${this.model}: ${err}`);
    }
  }
}

module.exports = RoleService;
