import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

//Importando o hook useAuth
import { useAuth } from '../../hooks/auth'


export const Header = ( {} ) => {
    
    //Recuperando informações compartilhadas pelo authProvider;
    const { signOut } = useAuth();

    return(
        <>
            <Container>
                <Profile to="/profile">
                    <img src="https://github.com/rodriguessz.png" alt="Imagem do usuário" />

                    <div>
                        <span>Bem vindo,</span>
                        <strong>Enzo Rodrigues</strong>
                    </div>
                </Profile>

                <Logout onClick={signOut}>
                    <RiShutDownLine />
                </Logout>
            </Container>
        </>
    )

}