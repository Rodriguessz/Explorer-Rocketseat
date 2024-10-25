//createContext - Cria um contexto;
//useContext - Hook para comsumir informações de um contexto especifico
import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

//Cria o contexto de autenticação.
const AuthContext = createContext({})

//Função responsável por fornecer o contexto de autenticação aos componentes filhos.
// Todos os componentes englobados pelo AuthProvider terão acesso às informações
function AuthProvider({ children }) {

    const [data, setData] = useState({})

    //Faz a autenticação do usuário no sistema
    async function signIn({ email, password }) {
        
        try {
            //Cria um sessão para o usuário 
            const response = await api.post("/sessions", { email, password })
            //Desestrutura a response, recuperando o token gerado e o usuário enviado da API;
            const { token , user } = response.data; 

            //Armazena as informações do usuário no localStorage;
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);

            // Define o token de autenticação no cabeçalho padrão de todas as requisições;
            // Dessa forma, todas as requisições feitas pela api (axios) irão incluir automaticamente o token gerado durante o processo de login, utilizando o formato "Bearer <token>" no cabeçalho de autorização.
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            //Atribui ao estado as informações do usuário recuperadas da API;
            setData({ token , user });

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível efetuar o login!")
            }
        }


    }

    //Encerra a sessão do usuário na aplicação
    function signOut(){   
        //Remove as informações do usuário do localStorage;
        localStorage.removeItem("@rocketnotes:user");
        localStorage.removeItem("@rocketnotes:token");

        //Remove as informações armazenadas no estado de usuário;
        setData({});

    }

    //Dispara uma ação após a renderização do componente
    //Utilizamos para recuperar informações do usuário no localStorage e armazena-las no estado de usuário caso existam;
    useEffect(() => {

        //Recupera as informações do usuário armazenadas no localStorage caso o login tenha sido efetuado;
        const user = localStorage.getItem("@rocketnotes:user")
        const token = localStorage.getItem("@rocketnotes:token")

        //Verifica se as informações recuperadas existem
        if(user && token){
    
            // Define o token de autenticação no cabeçalho padrão de todas as requisições;
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            //Adiciona ao estado de usuário as informações recuperadas do localStorage
            setData({ token , user: JSON.parse(user)});
        }

    } , [])

    return (
        <AuthContext.Provider value={{ signIn, signOut ,user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

//Retorna as informações presentes no contexto de autenticação.
function useAuth() {
    //Consome as informações compartilhadas pelo contexto de autenticação.
    const context = useContext(AuthContext);

    //Retorna as informações recuperadas;
    return context;
}


export { AuthProvider, useAuth }