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

    //Links relacionados a nota que o usuário está criando
    const [links, setLinks] = useState([]);

    //Novo link que o usuário irá adicionar a nota;
    const [newLink, setNewLink] = useState("");

    //Adiciona um link relacionado a nota no estado de links;
    function handleAddLink() {
        //Adiciona o novo link adicionado pelo usuário no estado dos links já existentes;
        setLinks(prevState => [...prevState, newLink]);

        //Limpa o estado de newLink;
        setNewLink("")
    }

    //Remove o link especifico clicado pelo usuário
    function handleRemoveLink(deletedIndex){
        //Utiliza o filter para retornar todos os links que forem diferentes ao que o usuário quer remover
        setLinks(prevState => prevState.filter((link, index) => index != deletedIndex))
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
                                        onclick={() => {handleRemoveLink(index)}}
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
                            <NoteItem value="React" />
                            <NoteItem placeholder="Nova tag" isNew />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>

        </Container>
    )
}