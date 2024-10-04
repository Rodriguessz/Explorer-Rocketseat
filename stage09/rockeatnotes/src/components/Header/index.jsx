import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'


export const Header = ( {} ) => {
  
    return(
        <>
            <Container>
                <Profile>
                    <img src="https://github.com/rodriguessz.png" alt="Imagem do usuário" />

                    <div>
                        <span>Bem vindo,</span>
                        <strong>Enzo Rodrigues</strong>
                    </div>
                </Profile>

                <Logout>
                    <RiShutDownLine />
                </Logout>
            </Container>
        </>
    )

}