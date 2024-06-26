//Roteador especifico para gerenciar usuários
const { Router } = require("express");
const userRouter = Router();

//Definindo sub-rotas de "/user", rota definida em nosso router principal.
//OBS: Lembrando que cada rota definida aqui será uma sub-rota que complementa /users

userRouter.get("/", (request, response) => {
  response.send("ROTA DE USUÁRIOS");
});

//Exportando nosso router de gerenciamento de usuários
module.exports = userRouter;
