const Agenda = require("../models/Agenda");
const AgendaRepository = require("../repositories/AgendaRepository");

function AgendaController() {
  async function list(req, res) {
    const contatos = await AgendaRepository.getAll();

    res.render("agenda/list", {
      title: "Lista de Contatos",
      contatos: contatos,
    });
  }

  function create(req, res) {
    res.render("agenda/create");
  }

  async function save(req, res) {
    try {
      if (!req.body) {
        throw new Error("Dados do formulário não foram enviados");
      }
      await AgendaRepository.create(req.body);
      res.redirect("/agenda");
    } catch (error) {
      console.error("Erro ao salvar o contato:", error.message);
      res
        .status(500)
        .send("Erro ao salvar o contato. Por favor, tente novamente.");
    }
  }

  async function remove(req, res) {
    await AgendaRepository.remove(req.params.id);
    res.redirect("/agenda");
  }

  async function edit(req, res) {
    const contato = await AgendaRepository.findByID(req.params.id);
    res.render("agenda/edit", { contato: contato });
  }

  async function update(req, res) {
    await AgendaRepository.update(req.body.id, req.body);
    res.redirect("/agenda");
  }

  return {
    create,
    save,
    list,
    remove,
    edit,
    update,
  };
}

module.exports = AgendaController();
