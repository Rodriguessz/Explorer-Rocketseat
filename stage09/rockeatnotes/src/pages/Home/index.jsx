import { Container, Brand, Menu, Search, Content , NewNote } from "./styles"
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section"

import { FiPlus, FiSearch } from "react-icons/fi"




export const Home = ({}) => {
    return (

        <Container>
            
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" $isactive/></li>
                <li><ButtonText title="Frontend"/></li>
                <li><ButtonText title="Node"/></li>
                <li><ButtonText title="React"/></li>

            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note  data={{ title: "React Modal", tags: [ {id: 1, name: "react"}]}}/> 
                    <Note  data={{ title: "Exemplo de Middleware", tags: [ {id: 1, name: "nodejs"}, {id: 2, name: "express"}]}}/> 
                </Section>
            </Content>

            <NewNote>
                <FiPlus />
                <span>Criar nota</span> 
            </NewNote>



        </Container>

    )
}