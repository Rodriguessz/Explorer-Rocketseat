//Arquivo que conterá todas as funcionalidades/Ações do meu Focus Timer
import state from "./state.js"
import {html} from "./elements.js"
import *  as timer from "./timer.js"

export function toggleRunning (){
  /*Meu Jeito de resolver
  console.log(state.isRunning)
  let isRunning = state.isRunning //False
  
  if(isRunning){
    
    console.log("Parou de executar")

    state.isRunning = !state.isRunning
    console.log(state)
    html.classList.toggle("running")

    return;
  }

  console.log("Iniciou o contador")
  
  state.isRunning = true;
  html.classList.toggle("running")*/

  
  //Toggle retorna um valor boolean
  state.isRunning = html.classList.toggle("running")

  timer.countDown()



}


export function reset(){
  state.isRunning = false;
  html.classList.remove("running")
}

export function set(minutes, seconds){
  
}


export function toggleMusic(){
  state.isMute = html.classList.toggle("music-on")
}