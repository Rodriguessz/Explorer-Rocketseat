import { useState, useEffect } from "react"

//Hook para recuperar os parâmetros passados para rota;
import { useNavigate, useParams } from "react-router-dom"

import { api } from "../../services/api"

//Styled-components
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

import { Container, Links, Content } from "./styles"



//Named Export is more indicate to react components
export const Details = () => {

  //Estado para armazenar informações da nota recuperada.
  const [note, setNote] = useState(null);

  //Inicia o hook navigate para fazer o redirecionamento de rotas;
  const navigate = useNavigate()


  //Utiliza o hook para extrair todos os parâmetros passados na rota;
  //useParams() - Retorna um objeto com todos os parâmetros da rota;
  const params = useParams();

  //Redireciona o usuário para a página inicial
  function handlePageBack(){
    //Utiliza o navigate para redirecionar o usuário para a tela inicial;
    navigate("/")
  }

  //Recupera os dados da nota
  useEffect(() => {
    async function fetchNote() {

      //Recupera os dados da nota especifica assim que o componente for renderizado;
      const { data } = await api.get(`/notes/${params.id}`);

      //Adiciona os dados recuperados no estado note;
      setNote(data);
    }


    fetchNote()
  }, [])

  return (
    <>
      <Container>

        <Header />
        {/* Só renderiza informações da nota se houver alguma coisa no estado de nota */}
        {
          note &&
          <main>
            <Content>
              <ButtonText title="Excluir Nota" />

              <h1>{note.title}</h1>

              <p>
                {note.description}
              </p>

              {/* Exibe a seção de links uteis somente se a nota possui algum link */}
              {
                note.links &&
                <Section title="Links úteis" >
                  <Links>
                    {
                      note.links.map(link => (
                        <li key={String(link.id)}>
                          <a href={link.url} target="_blank">
                            {link.url}
                          </a>
                        </li>
                      ))
                    }

                  </Links>
                </Section>

              }

              {
                note.tags &&

                <Section title="Minhas notas" >
                  {note.tags.map(tag => (
                    <Tag
                      title={tag.name}
                      key={String(tag.id)}
                    />
                  ))}
                </Section>

              }

              <Button title="Voltar" onClick={handlePageBack} />
            </Content>

          </main>

        }


      </Container>

    </>
  )
}