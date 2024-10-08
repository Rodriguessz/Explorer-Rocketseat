//Styled-components
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

import { Container , Links } from "./styles"


//Named Export is more indicate to react components
export function Details(){
  return (
    <> 
      <Container>
        <Header />

        <ButtonText title="Excluir Nota"/>

        <Section title="Links úteis" >
            <Links>
              <li>https://www.rocketseat.com.br/</li>
              <li>https://www.rocketseat.com.br/</li>
            </Links>
        </Section>

        <Section title="Minhas notas" >
          <Tag title="node"/>
          <Tag title="express"/>
        </Section>


        <Button title="Voltar"/>
      </Container>

    </>
  )
}