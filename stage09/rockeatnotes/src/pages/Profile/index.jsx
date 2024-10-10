import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";



export const Profile = () => {
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/rodriguessz.png" alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />
                    </label>

                    <input type="file" id="avatar" />
                </Avatar>
                
                    <Input placeholder="Nome" icon={FiUser}/>
                    <Input placeholder="E-mail" icon={FiMail}/>
                
                    <Input placeholder="Senha Atual" type="password" icon={FiLock}/>
                    <Input placeholder="Nova Senha" type="password" icon={FiLock}/>
               

                <Button title="Salvar" disabled/>
            </Form>
            
        </Container>
    )
}