//Importando o hook useAuth
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";

import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'



export const Header = ( {} ) => {
    
    //Recuperando informações compartilhadas pelo authProvider;
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
    

    return(
        <>
            <Container>
                <Profile to="/profile">
                    <img src={avatarUrl} alt="Imagem do usuário" />

                    <div>
                        <span>Bem vindo,</span>
                        <strong>{user.name}</strong>
                    </div>
                </Profile>

                <Logout onClick={signOut}>
                    <RiShutDownLine />
                </Logout>
            </Container>
        </>
    )

}