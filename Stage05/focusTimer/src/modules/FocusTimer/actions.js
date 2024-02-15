//Arquivo que conterá todas as funcionalidades/Ações do meu Focus Timer
import state from "./state.js"
import  * as element from "./elements.js"
import *  as timer from "./timer.js"


export function toggleRunning (){
  //Toggle retorna um valor boolean
  state.isRunning = element.html.classList.toggle("running")

  timer.countDown()
}


export function reset(){

  //Atualiza o display de acordo com o estado inicial da applicação
  timer.updateDisplay()
  state.isRunning = false;
  element.html.classList.remove("running")
  
}



export function set(){

  element.clockMinutes.setAttribute("contenteditable", true)
  element.clockMinutes.focus()
  
}


export function toggleMusic(){
  state.isMute = element.html.classList.toggle("music-on")
}