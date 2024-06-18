//Faz um require para o modulo express e armazena tudo na variável.
const express = require('express');

//Const App - Inicializa o meu express;
const app = express();

//Indicando o tipo de informação que será retornada via body para nossa app
app.use(express.json())

//Definindo uma rota e atrelando a ela um método GET
app.get("/user/:id/:username", (request, response ) => {
    
    //Recuperando parâmetros de rota
    const {id, username} = request.params

    //Enviando uma resposta para o cliente
    response.send(`Bem vindo ao sistema: ${username}-${id}`)
    
    })

app.get("/users", (request, response) => {

    //Recuperando parâmetros de busca ( Query Params)
    let {name, limit} = request.query

    name = name ? name : "SEM FILTRO"
    limit = limit ? limit : "SEM LIMITE"
    
    //Enviando uma resposta para o cliente
    response.send(`Filtro por nome: ${name} e Limite de registros por página: ${limit}`)
})

//Defininindo uma rota e atrelando a ela um método POST

app.post("/create/user" , (request, response) => {

    //Desestruturando o objeto retornado no body da minha request
    const {name , email , password} = request.body

    //Enviando um json com as informações recuperadas
    response.json({name, email, password})
})

//Porta em que meu servidor irá rodar
const PORT = 3333;
//Listen(Porta , callback ) - Inicializa minha API na porta 3333 e quando estiver pronto, executa o callback
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`))