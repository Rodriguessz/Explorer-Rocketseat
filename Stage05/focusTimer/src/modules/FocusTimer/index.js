//Arquivo principal que irá conter todos os métodos do meu Focus Timer
import state from "./state.js"
import * as events from "./events.js" /* Importa todos os eventos que irão ocorrer
em minha aplicação */

import * as timer from "./timer.js"


export function start(minutes, seconds){    

    //O estado da aplicação irá receber o tempo passado no argumento 
    

    timer.updateDisplay()

    events.registerControls()
    
}