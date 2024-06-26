//Roteador especifico para gerenciar usuários
const { Router } = require("express");
const userRouter = Router();

//Importando o controller de usuários

const UserController = require("../controllers/UserController");

//Instanciando o controller de usuários
const userController = new UserController();

//Definindo sub-rotas de "/user", rota definida em nosso router principal.
//OBS: Lembrando que cada rota definida aqui será uma sub-rota que complementa /users

userRouter.post("/create", userController.create);

//Exportando nosso router de gerenciamento de usuários
module.exports = userRouter;
