const Services = require("./Services.js");

class SchedulingService extends Services {
  constructor() {
    super("Scheduling");
  }

  async createRegister(payload) {
    try {
      return await new this.dataSource[this.model](payload).save();
    } catch (err) {
      console.error(`Erro ao criar registro de ${this.model}: ${err}`);
    }
  }

  async getAll() {
    try {
      return await this.dataSource[this.model].find().populate({
        path: "userId",
        select: "id name",
      });
    } catch (err) {
      console.error(
        `Erro ao obter a lista de registro de ${this.model}: ${err}`
      );
    }
  }

  async getByOne(id) {
    try {
      return await this.dataSource[this.model].findOne({ _id: id }).populate({
        path: "userId",
        select: "id name",
      });
    } catch (err) {
      console.error(`Erro ao obter registro de ${this.model}: ${err}`);
    }
  }

  async getAllSchedulesByUserId(userId) {
    try {
      return await this.dataSource[this.model].find({ userId });
    } catch (err) {
      console.error(`Erro ao obter registro de ${this.model}: ${err}`);
    }
  }

  async getSchedulingByGraphic({ dataInicio, dataFim }) {
    return await this.dataSource[this.model].find({
      dataTime: { $gte: new Date(dataInicio), $lte: new Date(dataFim) },
    });
  }
}

module.exports = SchedulingService;
