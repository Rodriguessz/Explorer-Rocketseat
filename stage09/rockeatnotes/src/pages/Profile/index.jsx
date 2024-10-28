//Importando hooks do react
import { useState } from 'react'

//importando o hook useAuth.
import { useAuth } from '../../hooks/auth'

import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export const Profile = () => {
    
    //Recupera as informações do usuário compartilhadas via AuthProvider;
    const { user, updateProfile } = useAuth();
    
    //Cria o estado referente aos campos dos inputs
    const [name, setName] = useState(user.name); //Atribui como valor inicial o nome do usuário recuperado através da sessão.
    const [email, setEmail] = useState(user.email); //Atribui como valor inicial o email do usuário recuperado através da sessão.

    const [currentPsw, setCurrentPsw] = useState("");
    const [newPsw, setNewPsw] = useState("")

    const [avatarPreview, setAvatarPreview] = useState(user.avatar);

    async function handleUpdateProfile(){

        //Monta um objeto de usuário com os dados passados pelo usuário através dos inputs;
        const user = {
            name: name,
            email: email,
            oldPassword: currentPsw,
            password: newPsw,
        }

        //Chama a função para atualizar o usuário disponibilizada pelo authProvider, passando como argumento principal o objeto de usuário.
        await updateProfile({user});

    }

    //Altera a imagem de pré-visualização do input de avatar
    function handleAvatarChange(event){

        //Recupera o arquivo selecionado pelo usuário;
        const file = event.target.files[0]

        //Cria uma url temporária para exibição do arquivo sem precisar fazer upload da imagem em um servidor.
        //createObjectURL(objeto<File> || objeto<Blob>) - Retorna uma url temporária capaz de exibir o conteúdo do arquivo sem ser necessário fazer o upload do mesmo no servidor;
        const imagePreview = URL.createObjectURL(file);
        

    }

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

                    <input type="file" id="avatar" onChange={handleAvatarChange}/>
                </Avatar>
                
                    <Input placeholder="Nome" icon={FiUser} value={name} onChange={ event => setName(event.target.value)}/>
                    <Input placeholder="E-mail" icon={FiMail} value={email} onChange={ event => setEmail(event.target.value)}/>
                
                    <Input placeholder="Senha Atual" type="password" icon={FiLock} onChange={ event => setCurrentPsw(event.target.value)}/>
                    <Input placeholder="Nova Senha" type="password" icon={FiLock} onChange={ event => setNewPsw(event.target.value)} />
               

                <Button title="Salvar" onClick={handleUpdateProfile}/>
            </Form>
            
        </Container>
    )
}