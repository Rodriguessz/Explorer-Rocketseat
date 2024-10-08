import { Container, Form } from './styles'
import { Input } from '../../components/Input'

import { Button } from '../../components/Button'

import { FiMail, FiLock} from 'react-icons/fi'

export const SignIn = () => {
    return(
        <>
        
            <Container>
                <Form>
                    <h1>Rocket Notes</h1>
                    <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                    <h2>Faça seu login</h2>

                    <Input placeholder="E-mail" icon={FiMail}/>
                    <Input placeholder="Senha" icon={FiLock}/>

                    <Button title="Entrar" />

                    <a href="#">Criar Conta</a>
                    
                </Form>
            </Container>

        </>
    )
}