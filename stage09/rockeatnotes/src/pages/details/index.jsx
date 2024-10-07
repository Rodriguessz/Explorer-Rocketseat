//Styled-components
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Section } from "../components/Section"

import { Container , Links } from "./styles"


//Named Export is more indicate to react components
export function Details(){
  return (
    <> 
      <Container>
        <Header />

        <Section title="Links úteis" >
            <Links>
              <li>https://www.rocketseat.com.br/</li>
              <li>https://www.rocketseat.com.br/</li>
            </Links>
        </Section>


        <Button title="Voltar"/>
      </Container>

    </>
  )
}