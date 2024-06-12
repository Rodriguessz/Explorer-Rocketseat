//Faz um require para o modulo express e armazena tudo na variável.
const express = require('express');

//Const App - Inicializa o meu express;
const app = express();

//Definindo uma rota e atrelando a ela um método GET
app.get("/", (request, response ) => response.send("BEM-VINDO AO SISTEMA"))

//Porta em que meu servidor irá rodar
const PORT = 3333;
//Listen(Porta , callback ) - Inicializa minha API na porta 3333 e quando estiver pronto, executa o callback
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))