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
    //Sqlite - O retorno do método insert pode variar de acordo com o banco de dados utilizado. No sqlite, o retorno é um array com o ultimo id gerado.
    //Returning ('coluna') - Utilizando o método returning, podemos recuperar todos os ids que foram gerados após a inserção.
    //Desetruturação de arrays - Utilizamos pois o retorno é um array com o id gerado e queremos pegar apenas o valor e não o array em si.
    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id,
    }).returning('id');

    //Mapeia o array de links vinculados a nota criada, retornando um array de objetos com as propriedades: url e note_id;
    const linksData = links.map((link) => {
      return {
        note_id: note_id,
        url: link,
      };
    });

    //Cadastra os links no banco de dados e retorna um array com os ids gerados após a inserção;
    const linksIds = await knex("links").insert(linksData).returning('id');

    //Mapeia o array de tags vinculadas a nota criada, retornando um array de objetos com as propriedades: name, user_id e note_id;
    const tagsData = tags.map((tag) => {
      return {
        note_id: note_id,
        user_id: user_id,
        name: tag,
      };
    });

    //Cadastra as tags no banco de dados e retorna um array com os ids gerados após a inserção.
    const tagsIds = await knex("tags").insert(tagsData).returning('id');

    response
      .status(200)
      .json({ note_id: note_id, links: linksIds, tags: tagsIds });
  }

  async show(request, response) {
    //Recupera o id da nota que queremos consultar em nosso banco de dados
    const { note_id } = request.params;

    //Select - Indica de quais colunas queremos retornar informações, retornando um array de objetos,
    //onde cada objeto representa um registro encontado em nosso banco de dados
    //Where -  Adiciona uma cláusula de condição à consulta, filtrando os resultados para retornar somente os registros que atendem à condição especificada.
    //First - Recupera apenas o primeiro registro da consulta resultante
    const note = await knex("notes").where("id", note_id).select("*").first();

    //Recupera todas as tags vinculadas à tag com o id em questão;
    const tags = await knex("tags").where("note_id", note_id);

    //Recupera todas as tags vinculadas à tag com o id em questão;
    const links = await knex("links").where("note_id", note_id);

    // Usa o spread operator para extrair as propriedades do objeto `note` e adiciona em um novo objeto,
    //juntamente com  as novas propriedades `tags` e `links`.

    return response.status(200).json({ ...note, tags, links });
  }
}

module.exports = NotesController;
