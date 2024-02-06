//Arquivo principal que irá conter todos os métodos do meu Focus Timer

import state from "./state.js" //Estado inicial do meu timer

import * as events from "./events.js" /* Importa todos os eventos que irão ocorrer
em minha aplicação */


export function start(){
   
    events.registerControls()
    
}