//Criando o controller de usuários

class UserController {
  //Criar Usuário

  create(request, response) {
    //Extraindo informações do corpo da request
    const { login, password } = request.body;

    //Retornando uma resposta em Json e manipulando o status code
    response.status(201).json({ login, password });
  }
}
//Exportando o controller

module.exports = UserController;
