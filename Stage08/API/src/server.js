require("express-async-errors");
//Faz um require para o modulo express e armazena tudo na variável.
const express = require("express");

//Importando a função de migration do banco de dados e inicializando-a
const migrationsRun = require("./database/sqlite/migrations");
migrationsRun();


//Const App - Inicializa o meu express;
const app = express();

//Importando o roteador principal
const router = require("./routes");

//Importando o utilitário de tratamento de erros
const AppError = require("./utils/appError");

//Indicando o tipo de informação que será retornada via body para o nosso app
app.use(express.json());

//Indicando para nossa aplicação quais rotas ela enxerga
app.use(router);

//Aplicando o middleware para tratamento de errors

app.use((error, request, response, next) => {
  //Verifica se o erro capturado é uma instância de AppError
  if (error instanceof AppError)
    response.status(error.statusCode).json({
      status: "Error",
      statusCode: error.statusCode,
      message: error.message,
    });

  //Caso não seja, indique como erro interno do servidor
  return response
    .status(500)
    .json({ status: "Error", message: `Internal Server Error! ${error}` });
});

//Porta em que meu servidor irá rodar
const PORT = 3333;
//Listen(Porta , callback ) - Inicializa minha API na porta 3333 e quando estiver pronto, executa o callback
app.listen(PORT, () =>
  console.log(`Server is running on: http://localhost:${PORT}`),
);

