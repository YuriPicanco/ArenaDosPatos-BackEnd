const Services = require("./Services");

class PermissionService extends Services {
  constructor() {
    super("Permission");
  }

  async createRegister(payload) {
    try {
      const register = await this.dataSource[this.model].findOne({
        name: payload.name,
      });

      if (register) throw new Error("Permissão já cadastrada");

      const newRegister = await this.dataSource[this.model](payload);

      return newRegister.save();
    } catch (err) {
      console.error(`Erro ao criar registro de ${this.model}: ${err}`);
    }
  }
}

module.exports = PermissionService;
