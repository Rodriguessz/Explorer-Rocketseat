const { verify } = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');
const knex = require("../database/knex");
const { json } = require('express');

async function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers;

  //Agora que estamos mandando o token via cookie, precisamos verificar se existe algum cookie no cabeçalho
  //A propriedade cookie é uma string, onde cada cookie é separado por;.
  if (!authHeader.cookie) {
    throw new AppError("JWT token não informado", 401);
  }

  const [, token] = authHeader.cookie.split("token=")
  
  try {

    //Recuperando o user_id e a role do mesmo.
    const { sub: user_id, role } = verify(token, authConfig.jwt.secret);
    
    request.user = {
      id: Number(user_id),
      role,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}

module.exports = ensureAuthenticated;