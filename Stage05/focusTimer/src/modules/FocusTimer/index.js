//Arquivo principal que irá conter todos os métodos do meu Focus Timer

import * as events from "./events.js" /* Importa todos os eventos que irão ocorrer
em minha aplicação */

import * as timer from "./timer.js"

export function start(minutes, seconds){    
    timer.updateDisplay()
    events.registerControls()
    events.setMinutes()
    
}