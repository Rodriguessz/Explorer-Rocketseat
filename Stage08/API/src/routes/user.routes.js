const { Router } = require("express");
const userRouter = Router();

//Importando o controller do recurso de usuários
const UserController = require("../controllers/UserController");
//Iniciando uma instância do meu controller
const userController = new UserController();

//Criando uma rota POST
userRouter.post("/create", userController.create);

module.exports = userRouter;
