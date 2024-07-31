const knex = require("../../database/knex");

class NotesController {
  async create(request, response) {
    //Recuperando informações enviadas no body da request
    const { title, description, links, tags } = request.body;

    //Recuperando o id do usuário que está criando a note, via params por hora!
    const { user_id } = request.params;

    //Knex - Recebe como argumento a tabela em que serão inseridas as informações;
    //Insert - Espera receber um objeto ou array de objetos a serem inseridos
    //Retorno - Retorna um array com o id(s) gerado da inserção, além de inserir as informações no banco de dados;
    //Desetruturação de arrays - Utilizamos pois o retorno é um array com o id gerado e queremos pegar apenas o valor e não o array em si.
    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id,
    });

    //Mapeia o array de links vinculados a nota criada, retornando um array de objetos com as propriedades: url e note_id;
    const linksData = links.map((link) => {
      return {
        note_id: note_id,
        url: link,
      };
    });

    //Cadastra os links no banco de dados e retorna um array com os ids gerados após a inserção;
    const linksIds = await knex("links").insert(linksData);

    //Mapeia o array de tags vinculadas a nota criada, retornando um array de objetos com as propriedades: name, user_id e note_id;
    const tagsData = tags.map((tag) => {
      return {
        note_id: note_id,
        user_id: user_id,
        name: tag,
      };
    });

    console.log(tagsData);

    //Cadastra as tags no banco de dados e retorna um array com os ids gerados após a inserção.
    const tagsIds = await knex("tags").insert(tagsData);

    response
      .status(200)
      .json({ note_id: note_id, links: linksIds, tags: tagsIds });
  }
}

module.exports = NotesController;
