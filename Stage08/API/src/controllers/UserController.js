const AppError = require("../utils/appError");

const sqliteDb = require("../database/sqlite");

//Criando o controller de usuários
class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!email) {
      throw new AppError("O campo de email é obrigatorio!");
    }

    //Estabelece a conexão com o banco de dado
    const database = await sqliteDb();

    //Executa a query em questão e retorna a primeira linha de registro, caso encontrado.
    const emailAlreadyExisits = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email],
    );

    //Verifica se o email enviado na request está presente em nosso BD
    if (emailAlreadyExisits) {
      //Retorna um erro indicando que o email já foi cadastrado
      throw new AppError("O Email já cadastrado no sistema!");
    }

    //Inserindo o usuário no banco de dados, caso o email não seja encontrado
    await database.run(
      `INSERT INTO users (name, email, password) VALUES (?, ? , ?) `,
      [name, email, password],
    );

    response.status(201).json({});
  }
  catch(error) {
    return error;
  }
}

module.exports = UserController;
