import { FiMail, FiLock, FiUser} from 'react-icons/fi'

import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'



export const SignUp = () => {
    return(
        <>
        
            <Container>
                <Form>
                    <h1>Rocket Notes</h1>
                    <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                    <h2>Crie sua conta</h2>

                    <Input placeholder="Nome" icon={FiUser}/>
                    <Input placeholder="E-mail" icon={FiMail}/>
                    <Input placeholder="Senha" icon={FiLock}/>
                    

                    <Button title="Cadastrar" />

                    <a href="#">Voltar para o login</a>
                    
                </Form>

                <Background />
            </Container>
        </>
    )
}