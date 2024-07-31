//Roteador principal - Centraliza as rotas da aplicação

//Funcionalidade Router permite definir rotas de forma modular
const { Router } = require("express");

//Inicializa uma instância de Router
const router = Router();

//Importando os roteador espeficios
const userRouter = require("./user.routes");
const notesRouter = require("./notes.routes");

//Declarando rotas mães para recursos especificos - Callback será o carregamento do router especifico
router.use("/users", userRouter);
router.use("/notes", notesRouter);

//Exportando nosso router
module.exports = router;
