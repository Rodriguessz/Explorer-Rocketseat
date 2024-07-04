const AppError = require("../utils/appError");

//Criando o controller de usuários
class UserController {
  //Método Create - POST
  create(request, response) {
    //Extraindo informações do corpo da request
    const { login, password } = request.boiceta;

    if (!login) throw new AppError("Login obrigatório!");

    //Retornando uma resposta em Json e manipulando o status code
    response.status(201).json({ login: login, password });
  }
}
//Exportando o controller

module.exports = UserController;
