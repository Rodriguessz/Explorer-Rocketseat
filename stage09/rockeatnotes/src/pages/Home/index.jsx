import { useState, useEffect } from "react";

import { api } from "../../services/api";


import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section"

import { FiPlus, FiSearch } from "react-icons/fi"




export const Home = ({ }) => {

    //Estado para armazenar as tags do usuário
    const [tags, setTags] = useState([])

    //Estado para armazenar as tags que já foram selecionadas pelo usuário.
    const [selectedTags, setSelectedTags] = useState([]);


    function handleTagSelection(tagName) {

        if(tagName == "all") return setSelectedTags([]);

        //Verifica se a tag está presente no array.
        //Includes(valorProcurado) - Verifica se existe uma ocorrencia do valor procurado no array.
        const alreadySelected = selectedTags.includes(tagName)

        if (alreadySelected) {
            //Retorna um array filtrado sem a tag clicada pelo usuário.
            const filteredTags = selectedTags.filter(tag => tagName != tag)

            //Adiciona o array resultante no estado de tags selecionadas;
            setSelectedTags(filteredTags)
        } else {
            // Adiciona a nova tag ao estado, preservando as tags já selecionadas
            setSelectedTags(prevState => [...prevState, tagName])
        }
    }


    //Busca as tags do usuário na API e adiciona ao estado de tags;
    useEffect(() => {
        async function fetchTags() {
            //Busca as tags do usuário;
            const { data } = await api.get("/tags");

            //Insere as tags recueperadas no estado criado previamente;
            setTags(data)
        }

        fetchTags();

    }, [])

    return (

        <Container>

            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        $isactive={selectedTags.length === 0}
                        onClick={() => handleTagSelection("all")}
                    />
                </li>

                {tags && tags.map(tag => (
                    <li key={String(tag.id)}>
                        <ButtonText
                            title={tag.name}
                            onClick={() => handleTagSelection(tag.name)}
                            $isactive={selectedTags.includes(tag.name)}
                        />
                    </li>
                ))}

            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{ title: "React Modal", tags: [{ id: 1, name: "react" }] }} />
                    <Note data={{ title: "Exemplo de Middleware", tags: [{ id: 1, name: "nodejs" }, { id: 2, name: "express" }] }} />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                <span>Criar nota</span>
            </NewNote>



        </Container>

    )
}