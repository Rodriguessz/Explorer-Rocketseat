const { Router } = require("express");
const userRouter = Router();

//Importando o controller do recurso de usuários
const UserController = require("../controllers/UserController");
//Iniciando uma instância do meu controller
const userController = new UserController();

//Criando uma rota POST para criação de usuários
userRouter.post("/create", userController.create);

//Criando uma rota PUT para atualização de usuários
userRouter.put("/:id", userController.update);

module.exports = userRouter;
