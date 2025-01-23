import { CheckCircle, House, Folder, PlusSquare, Note, SignOut, X} from "@phosphor-icons/react";

import { Container, Footer, Nav, Title, Header, Button } from "./styles";

export function SideMenu({ menuSettings }) {

  return (
    <Container $active={menuSettings.value} >
      <Header>
        <Title><CheckCircle /> e-Tasks</Title>

        {menuSettings.value && (<Button onClick={() => menuSettings.setter(prevState => !prevState)}>
          <X />
        </Button>)}
        

      </Header>

      <Nav>
        <a href="#" data-menu-active="true"><House /> Home</a>
        <a href="#"><PlusSquare /> Nova tarefa</a>
        <a href="#"><Folder /> Projetos</a>
        <a href="#"><Note /> Relatórios</a>
      </Nav>

      <Footer>
        <img src="https://github.com/rodriguessz.png" alt="Foto do usuário" />
        <div>
          <strong>Enzo Rodrigues</strong>
          <small>enzo.orodrigues03@gmail.com</small>
        </div>

        <Button type="button">
          <SignOut />
        </Button>
      </Footer>
    </Container>
  );
}