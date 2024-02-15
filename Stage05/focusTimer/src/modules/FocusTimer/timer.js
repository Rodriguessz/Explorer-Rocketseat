
import state from "./state.js"
import * as element from "./elements.js" 
import { reset } from "./actions.js"


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

    //Retorna o conteúdo de cada span, transformado-os em Number.
    let minutes = Number(element.clockMinutes.textContent)
    let seconds = Number(element.clockSeconds.textContent)
    

    //Verifica se o meu timer está rodando
    if(!state.isRunning){
        return
    }


    //Se estiver rodando, reduz um a cada vez que minha recursão for executada
    seconds = seconds - 1

    
    //Verifica se meus segundos no display são menores que 0
    if(seconds < 0){

        minutes = minutes - 1;
        seconds = 59;  
    }


    //Verifica se os minutos do meu timer são inferiores a 0

    if(minutes < 0){
        //Funcção reset importada do modulo actions.js (Atualiza o display para o estado inicial)
        reset()
        return 
    }

    
    //Atualiza o display com base nos segundos e minutos atualizados dentro da nossa recursão;
    updateDisplay(minutes, seconds)

    //Adiciona um delayu de 1000ms e chama a funcção countdown() recursivamente
    setTimeout(()=>{countDown()}, 100)

  
}   