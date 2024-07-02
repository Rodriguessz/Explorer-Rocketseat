//Criando o controller de usuários

class UserController {
  //Criar Usuário

  create(request, response) {
    //Extraindo informações do corpo da request
    const { login, password, isAdm } = request.body;

    //Retornando uma resposta em Json e manipulando o status code
    console.log("Passou pelos middlewares e criou o usuário com sucesso!");
    response.status(201).json({ login, password, isAdm });
  }
}
//Exportando o controller

module.exports = UserController;
