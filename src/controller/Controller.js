class Controller {
  constructor(service) {
    this.service = service;
  }

  async getAll(req, res) {
    try {
      const registerList = await this.service.getAll();

      if (!registerList)
        return res.status(404).json({ MESSAGE: `Lista de Vazia` });

      return res.status(200).json({ registerList });
    } catch (err) {
      res.status(500).json({
        message: `ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`,
      });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const register = await this.service.getByOne(id);

      if (!register)
        return res.status(404).json({ MESSAGE: `Registro não encontrado` });

      return res.status(200).json({ register });
    } catch (err) {
      res.status(500).json({
        message: `ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`,
      });
    }
  }

  async createRegister(req, res) {
    try {
      const payload = req.body;

      const newRegister = await this.service.createRegister(payload);

      return res.status(201).json(newRegister);
    } catch (err) {
      res.status(500).json({
        message: `ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`,
      });
    }
  }

  async updateRegister(req, res) {
    try {
      const { id } = req.params;
      const payload = req.body;

      const updateRegister = await this.service.updateRegister(id, payload);

      return res.status(200).json({ updateRegister });
    } catch (err) {
      res.status(500).json({
        message: `ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`,
      });
    }
  }

  async deleteRegister(req, res) {
    try {
      const { id } = req.params;

      await this.service.deleteRegister(id);

      return res.status(200).json({ MESSAGE: `Registro deletado` });
    } catch (err) {
      res.status(500).json({
        message: `ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`,
      });
    }
  }

  async deleteAll(req, res) {
    try {
      await this.service.deleteAllRegisters();

      return res.status(200).json({ MESSAGE: `Registro deletado` });
    } catch (err) {
      res.status(500).json({
        message: `ROOT[${this.service.model}]: ERROR CONTROLLER: ${err}`,
      });
    }
  }
}

module.exports = Controller;
