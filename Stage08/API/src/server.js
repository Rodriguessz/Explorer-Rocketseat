//Faz um require para o modulo express e armazena tudo na variável.
const express = require('express');

//Const App - Inicializa o meu express;
const app = express();

//Definindo uma rota e atrelando a ela um método GET
app.get("/user/:id/:username", (request, response ) => {
    
    //Recuperando parâmetros de rota
    const {id, username} = request.params

    //Enviando uma resposta para o cliente
    response.send(`Bem vindo ao sistema: ${username}-${id}`)
    
    })

app.get("/products", (request, response) => {

    //Recuperando parâmetros de busca
    let {category, limit} = request.query

    category = category ? category : "SEM FILTRO"
    limit = limit ? limit : "SEM LIMITE"
    
    //Enviando uma resposta para o cliente
    response.send(`Filtro de categoria: ${category} e Limite de registros por página: ${limit}`)
})

//Porta em que meu servidor irá rodar
const PORT = 3333;
//Listen(Porta , callback ) - Inicializa minha API na porta 3333 e quando estiver pronto, executa o callback
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))