const { Router } = require("express");
const userRoutes = Router();

const ensureAuthentication = require("../middleware/ensureAuthentication");

//Importando o controller do recurso de usuários
const UserController = require("../controllers/UserController");
//Iniciando uma instância do meu controller
const userController = new UserController();

//Criando uma rota POST para criação de usuários
userRoutes.post("/create", userController.create);

//Criando uma rota PUT para atualização de usuários
userRoutes.put("/", ensureAuthentication , userController.update);

module.exports = userRoutes;
