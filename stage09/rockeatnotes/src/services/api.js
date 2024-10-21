// Importa a biblioteca Axios, que auxilia na manipulação de requisições HTTP.
import axios from 'axios';

// Cria uma instância do Axios e define as configurações básicas para a comunicação com o back-end.
// A propriedade baseURL especifica a URL base que será utilizada para todas as requisições HTTP.
export const api = axios.create({
    baseURL: "http://localhost:3333"
});
