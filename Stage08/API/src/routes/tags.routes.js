const { Router } = require("express");
const tagsRoutes = Router();

//Importandno o controller de tags da minha aplicação
const TagsController = require("../controllers/Tags/TagsController");
const tagsController = new TagsController();

//Definindo as rotas para cada funcionalidade de tagss
tagsRoutes.get("/show/all/:user_id", tagsController.index);
tagsRoutes.post("LINDO")

module.exports = tagsRoutes;

