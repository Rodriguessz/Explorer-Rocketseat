import { useState } from "react";

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export const New = () => {

    //Estados para manipulação dos links
    const [links, setLinks] = useState([]); //Estado para armazenar os links adicionados pelo usuário; 
    const [newLink, setNewLink] = useState(""); //Novo link;

    //Estados para manipulação das tags
    const [tags, setTags] = useState([]); //Estado para armazenar os links adicionados pelo usuário; 
    const [newTag, setNewTag] = useState(""); //Novo link;

    //Adiciona um link relacionado a nota no estado de links;
    function handleAddLink() {
        //Adiciona o novo link adicionado pelo usuário no estado dos links já existentes;
        setLinks(prevState => [...prevState, newLink]);

        //Limpa o estado de newLink;
        setNewLink("")
    }

    //Remove o link especifico clicado pelo usuário
    function handleRemoveLink(deletedIndex) {
        //Utiliza o filter para retornar todos os links que forem diferentes ao que o usuário quer remover
        setLinks(prevState => prevState.filter((link, index) => index != deletedIndex))
    }

    //Adicona uma tag a nota que está sendo cadastrada;
    function handleAddTag() {

        //Adiciona a nova tag adicionada pelo usuário no estado de tags já existentes;
        setTags(prevState => [...prevState, newTag]);
        //Limpa o valor da tag para refletir na limpeza do input posteriormente;
        setNewTag("");
    }


    //Remove a tag especifica selecionada pelo usuário;
    function handleRemoveTag(deletedIndex) {
        //Utiliza o filter para retornar todos os links que forem diferentes ao que o usuário quer remover
        setTags(prevState => prevState.filter((tag, index) => index != deletedIndex))
    }

    return (
        <Container>

            <Header />

            <main>
                <Form>

                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título" />

                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis" >

                        {/* Mapeia os links adicionados pelo usuário, renderizando o componente noteItem para cada um deles */}
                        {
                            links.map((link, index) => {
                                return (
                                    <NoteItem
                                        key={String(index)}
                                        value={link}
                                        onclick={() => { handleRemoveLink(index) }}
                                    />
                                )
                            })
                        }


                        <NoteItem
                            placeholder="Novo link"
                            value={newLink} /* Define o valor padrão do input sendo o valor do estado newLink */
                            isNew
                            onChange={event => setNewLink(event.target.value)} /* Adiciona o valor digitado pelo usuário ao estado newLink */
                            onclick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores" >
                        <div className="tags">

                        {/* Mapeia as tags adicionados pelo usuário, renderizando o componente noteItem para cada uma delas */}
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <NoteItem
                                            key={String(index)}
                                            value={tag}
                                            onclick={() => { handleRemoveTag(index)}}
                                        />
                                    )
                                })
                            }
                            <NoteItem
                                placeholder="Nova tag"
                                isNew
                                onChange={event => setNewTag(event.target.value)}
                                value={newTag}
                                onclick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>

        </Container>
    )
}