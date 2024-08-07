const knex = require("../../database/knex");
const AppError = require("../../utils/appError");

class NotesController {
  async index(request, response) {
    //Recupera o id do usuário e titulo da nota enviados via parametros de consulta;
    const { user_id, title, tags } = request.query;

    let notes;

    //Verifica se o usuário enviou tags como parametro de consulta para serem filtradas
    if (tags) {

      //Split - Divide a string recuperada em um array de strings, utilizando a virgula como separador
      //Map - Retorna um novo array com tags sem espaços em branco
      //Trim - Remove os espaços em branco de uma string.
      const filteredTags = tags.split(",").map((tag) => tag.trim());

      //Recupera as tags vinculadas ao usuário e que correspondam com as tags enviadas para o filtro.
      //WhereIn - Busca registros onde o valor da coluna especifica corresponde a um dos valores contidos no array passado.
      notes = await knex("tags").where({ user_id }).whereIn("name", filteredTags);

    } else {
      //Recupera as notas do usuário
      //WhereLike - Busca na coluna indicada uma ocorrência do valor passado como argumento
      // % - Caractere curinga, quando adicionado no começo e no final, busca o valor de ocorrência em toda string.
      notes = await knex("notes").where({ user_id }).whereLike("title", `%${title}%`);
    }

    return response.status(200).json(notes);
  }
  async create(request, response) {
    //Recuperando informações enviadas no body da request
    const { title, description, links, tags } = request.body;

    //Recuperando o id do usuário que está criando a note, via params por hora!
    const { user_id } = request.params;

    const userExists = await knex("users").where({ id: user_id });

    if (!userExists.length > 0) {
      throw new AppError("Usuário não encontrado");
    }

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

    //Cadastra as tags no banco de dados e retorna um array com os ids gerados após a inserção.
    const tagsIds = await knex("tags").insert(tagsData);

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

  async delete(request, response) {
    //Recupera o id da nota que queremos consultar em nosso banco de dados
    const { note_id } = request.params;

    //Delete() - Deleta um ou mais registros do banco de dados
    //Retorno - Retorna a quantidade de registros excluidos após a execução do comando
    await knex("notes").where({ id: note_id }).delete();

    return response
      .status(200)
      .json({ message: `Note excluida com sucesso!`, note_id: note_id });
  }
}

module.exports = NotesController;
