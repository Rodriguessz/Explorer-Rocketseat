import { Plus, List} from "@phosphor-icons/react";

import { Button } from "../Button";

import { Container, Menu } from "./styles";

export function Header({ setmenu }) {
  return (
    <Container>

      {/* Hamburger Menu */}
      <Menu onClick={() => setmenu(prevState => !prevState)}>
        <List />
      </Menu>

      <h1>Tarefas</h1>
      <Button icon={Plus} title="Nova tarefa" />
    </Container>
  );
}