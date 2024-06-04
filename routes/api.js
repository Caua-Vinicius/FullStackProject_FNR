const express = require("express");
const router = express.Router();

const TasksController = require("../app/controllers/api/TasksController");
const UsersController = require("../app/controllers/api/UsersController");
const AgendaController = require("../app/controllers/api/AgendaController");


// Rotas das Tarefas
router.get("/tasks", TasksController.list);
router.get("/tasks/:id", TasksController.show);
router.post("/tasks", TasksController.save);
router.delete("/tasks/:id", TasksController.remove);
router.put("/tasks/:id", TasksController.update);
router.put("/tasks/:id/update-status", TasksController.updateStatus);

// Rotas dos Contatos da Agenda

router.get("/agenda", AgendaController.getAll);
router.get("/agenda/:id", AgendaController.findByID);
router.post("/agenda", AgendaController.create);
router.put("/agenda/:id", AgendaController.update);
router.delete("/agenda/:id", AgendaController.remove);

// Rotas dos Usuarios

router.get("/users", UsersController.list);
router.post("/users/login", UsersController.login);
router.get("/users/:id", TasksController.show);
router.post("/users", UsersController.save);
router.delete("/users/:id", UsersController.remove);
// router.put('/users/:id', UsersController.update)

router.get("*", function notFound(request, response) {
  return response.status(404).json({ message: "Página não encontrada" });
});

module.exports = router;
