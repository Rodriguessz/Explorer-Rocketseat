const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const knex = require("../database/knex");
const authConfig = require("../configs/auth");
const AppError = require("../utils/AppError");

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first();

    if (!user) {
      throw new AppError("E-mail e/ou senha incorreta.", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreta.", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    
    //Adicionando a role do usuário no payload
    const token = sign({ role: user.role}, secret, {
      subject: String(user.id),
      expiresIn
    });


    //Adicionando cookie para envio do token
    //Automaticamente adicionado ao cebeçalho
    response.cookie("token", token, {
      path: "/",
      httpOnly: true,
      sameSite: "Strict",
      secure: false,
      maxAge: 15 * 60 * 1000

    })

    //Deletando a propriedade de senha para preservar a segurança quando os dados forem para o front-end;
    delete user.password


    response.status(201).json({ user });
  }
  
  async logout(request, response){
    response.clearCookie("token", {
      path: "/",
      httpOnly: true,
      sameSite: "Strict",
      secure: false,
    });

    console.log("Passou aqui")

    return response.status(204).json({});
  }
}

module.exports = SessionsController;