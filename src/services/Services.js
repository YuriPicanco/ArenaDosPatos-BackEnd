// const models = require("../models");
const User = require("./../models/User.js");
const Fields = require("./../models/Fields.js");
const Scheduling = require("./../models/Scheduling.js");
const Role = require("./../models/Roles.js");
const Permission = require("./../models/Permission.js");

class Services {
  dataSource = { User, Fields, Scheduling, Role, Permission };
  constructor(model) {
    this.model = model;
  }

  async getAll({ limite, pagina }) {
    try {
      return await this.dataSource[this.model].find();
    } catch (err) {
      console.error(
        `Erro ao obter a lista de registro de ${this.model}: ${err}`
      );
    }
  }

  async getByOne(id) {
    try {
      return await this.dataSource[this.model].findOne({ _id: id });
    } catch (err) {
      console.error(`Erro ao obter registro de ${this.model}: ${err}`);
    }
  }

  async createRegister(payload) {
    try {
      const register = await new this.dataSource[this.model](payload);

      return register.save();
    } catch (err) {
      console.error(`Erro ao criar registro de ${this.model}: ${err}`);
    }
  }

  async updateRegister(id, payload) {
    try {
      const updateRegister = await this.dataSource[this.model].findOneAndUpdate(
        {
          _id: id,
        },
        payload,
        {
          new: true,
        }
      );
      console.log(updateRegister);
      return updateRegister;
    } catch (err) {
      console.error(`Erro ao atualizar registro de ${this.model}: ${err}`);
    }
  }

  async deleteRegister(id) {
    try {
      await this.dataSource[this.model].findOneAndDelete({ _id: id });
    } catch (err) {
      console.error(`Erro ao deletar registro de ${this.model}: ${err}`);
    }
  }

  async deleteAllRegisters(req, res) {
    try {
      console.log("DELETE ALL REGISTERS");

      await this.dataSource[this.model].deleteMany({});
    } catch (err) {
      console.error(`Erro ao deletar registro de ${this.model}: ${err}`);
    }
  }
}

module.exports = Services;
