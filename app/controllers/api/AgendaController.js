const AgendaRepository = require("../../repositories/AgendaRepository");

function AgendaController() {
  async function getAll(req, res) {
    const contacts = await AgendaRepository.getAll();
    res.status(200).json(contacts);
  }

  async function findByID(req, res) {
    try {
      const contact = await AgendaRepository.findById(req.params.id);

      if (!contact) {
        return res.status(404).send({
          message: "Contato não encontrado.",
        });
      }

      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({
        message: "Contato não encontrado.",
      });
    }
  }

  async function create(req, res) {
    try {
      const contact = await AgendaRepository.create(req.body);
      res.status(201).json(contact);
    } catch (error) {
      res.status(400).json(error.details);
    }
  }

  async function update(req, res) {
    const contact = await AgendaRepository.findById(req.params.id);

    if (!contact) {
      return res.status(404).send({
        message: "Contato não encontrado.",
      });
    }

    await AgendaRepository.update(req.params.id, req.body);

    res.json({
      message: "Contato atualizado.",
    });
  }

  async function remove(req, res) {
    const contact = await AgendaRepository.findByID(req.params.id);

    if (!contact) {
      return res.status(404).send({
        message: "Contato não encontrado.",
      });
    }

    await AgendaRepository.remove(req.params.id);

    res.status(200).json({
      message: "Contato removido.",
    });
  }

  return {
    create,
    getAll,
    findByID,
    remove,
    update,
  };
}

module.exports = AgendaController();
