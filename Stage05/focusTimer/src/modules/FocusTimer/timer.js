
import state from "./state.js"
import * as element from "./elements.js" 

export function updateDisplay(minutes, seconds){
    /*Pode ou não receber um valor. Caso não receba (null), pegue por
    padrão o valor do estado do nosso timer*/

    //Nulish operator
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    /*Valor contido em clockMinutes e clockSeconds 
    irá receber o valor passado como argumento
     ou valor contido no estado da aplicação */
    

     /* padStart() - Método de string que determina um número mínimo de 
     caracteres para uma string e caso não tenha o minimo, adiciona o cara
     cter passado como segundo argumento na frente da string.
     */

    element.clockMinutes.textContent = String(minutes).padStart(2, "0")
    element.clockSeconds.textContent = String(seconds).padStart(2, "0")

    
    
}

export function countDown(){
    if(!state.isRunning){
        return
    }

    console.log("Iniciou")
    setTimeout(()=>{countDown()}, 1000)
}