//Arquivo que conterá todas as funcionalidades/Ações do meu Focus Timer
import state from "./state.js"
import {html} from "./elements.js"

export function toggleRunning (){
  console.log(state.isRunning)
  let isRunning = state.isRunning //False
  
  if(isRunning){
    
    console.log("Parou de executar")

    state.isRunning = !state.isRunning
    console.log(state)
    html.classList.toggle("running")

    return 
  }

  console.log("Iniciou o contador")
  
  state.isRunning = true;
  html.classList.toggle("running")

  console.log(state)
}