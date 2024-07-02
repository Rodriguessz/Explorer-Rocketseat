//Roteador especifico para gerenciar usuários
const { Router } = require("express");
const userRouter = Router();

//Importando o controller de usuários
const UserController = require("../controllers/UserController");
//Instanciando o controller de usuários
const userController = new UserController();

//Middlewares - Métodos que interceptam a requisição antes de chegar em seu destino final
//Podem modificar objeto da request, reponse e interromper o fluxo solicitação-resposta.

function myMiddleware(request, response, next) {
  //Recupera informações da request
  const { isAdm } = request.body;

  if (!isAdm) return response.json({ message: "user unauthorized" });

  //Next() - Avança para o proximo middleware da pilha
  //OBS: Sem ele, a request nunca passará para o destino final
  next();
}

//Definindo sub-rotas de "/user", rota definida em nosso router principal.
//OBS: Lembrando que cada rota definida aqui será uma sub-rota que complementa /users
//Utilizando Middlewares - Geralmente são separados/encadeaos por virgula
userRouter.post("/create", myMiddleware, userController.create);

//Exportando nosso router de gerenciamento de usuários
module.exports = userRouter;
