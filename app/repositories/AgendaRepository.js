const Agenda = require("../models/Agenda");

function AgendaRepository() {
  async function getAll() {
    const Contatos = await Agenda.findAll({ raw: true });
    return Contatos;
  }

  async function findByID(id) {
    const contact = await Agenda.findByPk(id);
    return contact;
  }

  async function create(dados) {
    const contato = {
      nome: dados.nome,
      celular: dados.celular,
      rua: dados.rua,
      numero: dados.numero,
      bairro: dados.bairro,
      cidade: dados.cidade,
      estado: dados.estado,
      cep: dados.cep,
      complemento: dados.complemento,
      email: dados.email,
    };

    const contact_created = await Agenda.create(contato);
    return contact_created;
  }

  async function update(id, dados) {
    const contact = {
      nome: dados.nome,
      celular: dados.celular,
      rua: dados.rua,
      numero: dados.numero,
      bairro: dados.bairro,
      cidade: dados.cidade,
      estado: dados.estado,
      cep: dados.cep,
      complemento: dados.complemento,
      email: dados.email,
    };

    const contact_updated = await Agenda.update(contact, { where: { id: id } });
    return contact_updated;
  }

  async function remove(id) {
    await Agenda.destroy({ where: { id: id } });
  }

  return {
    getAll,
    findByID,
    create,
    remove,
    update,
  };
}

module.exports = AgendaRepository();
