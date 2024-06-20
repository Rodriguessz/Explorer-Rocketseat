//Faz um require para o modulo express e armazena tudo na variável.
const express = require('express');

//Const App - Inicializa o meu express;
const app = express();

//Importando o roteador principal
const router = require("./routes")

//Indicando o tipo de informação que será retornada via body para nossa app
app.use(express.json())

//Indicando para nossa aplicação quais rotas ela enxerga
app.use(router)


//Porta em que meu servidor irá rodar
const PORT = 3333;
//Listen(Porta , callback ) - Inicializa minha API na porta 3333 e quando estiver pronto, executa o callback
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))