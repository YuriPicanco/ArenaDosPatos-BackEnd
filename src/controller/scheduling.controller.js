const mongoose = require("mongoose");
const Controller = require("./Controller.js");
const SchedulingService = require("../services/scheduling.services.js");

const schedulingService = new SchedulingService();

class SchedulingController extends Controller {
  constructor() {
    super(schedulingService);
  }

  async createRegister(req, res) {
    try {
      const { id: userId, date, hour, total } = req.body;
      const [hora, minuto] = hour.split(":");
      const [dia, mes, ano] = date.split("/");
      const newDate = new Date(ano, mes, dia, hora, minuto);

      const newRegister = await this.service.createRegister({
        _id: new mongoose.Types.ObjectId(),
        userId,
        dataTime: newDate,
        total: total,
      });

      res.status(201).json(newRegister);
    } catch (err) {
      console.error(`ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`);
    }
  }

  async getAllSchedulesByUserId(req, res) {
    try {
      const { userId } = req.params;

      const list = await this.service.getAllSchedulesByUserId(userId);

      res.status(201).json(list);
    } catch (err) {
      console.error(`ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`);
    }
  }

  async getSchedulingByGraphic(req, res) {
    try {
      const [dataInicio] = req.query.dataInicio.split("(");
      const [dataFim] = req.query.dataFim.split("(");

      const schedulesListGraphic = await this.service.getSchedulingByGraphic({
        dataInicio,
        dataFim,
      });

      res.status(200).json({ length: schedulesListGraphic.length });
    } catch (err) {
      console.error(`ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`);
    }
  }
}

module.exports = SchedulingController;
