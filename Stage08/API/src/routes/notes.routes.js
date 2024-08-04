const { Router } = require("express");
const notesRoutes = Router();

//Importando o controller de notes
const NotesController = require("../controllers/Notes/NotesController");
const notesController = new NotesController();

notesRoutes.post("/create/:user_id", notesController.create);

notesRoutes.get("/show/:note_id", notesController.show);

notesRoutes.delete("/delete/:note_id", notesController.delete);

module.exports = notesRoutes;
