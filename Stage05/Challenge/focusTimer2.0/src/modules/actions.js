
import state from "./stateTimer.js"
import { timerCountDown, updateDisplay } from "./timer.js"
import { clockMinutes, clockSeconds, error , toggleMode, sounds} from "./elements.js"




export function toggleTimer(){

  state.isRunning = document.documentElement.classList.toggle("running")

  timerCountDown()

  console.log(sounds)




}


export function setTime(){
  clockMinutes.setAttribute("contenteditable", true)
  clockMinutes.focus()

  
}


export function resetTimer(){
  updateDisplay()
  state.isRunning = false;
  document.documentElement.classList.remove("running")
  return
}


export function plusTime(){
  let minutes = Number(clockMinutes.textContent)
  let seconds = Number(clockSeconds.textContent)

  minutes = minutes + 5


  if(minutes > 60){
    minutes = 60
    seconds = 0
    updateDisplay(minutes, seconds)
    return
  }

  updateDisplay(minutes, seconds)
}

export function minusTime(){
  let minutes = Number(clockMinutes.textContent)
  let seconds = Number(clockSeconds.textContent)


  if(minutes - 5 < 0){
    
    error.classList.add("open")
    toggleMode.classList.add("hidden")
    error.querySelector("p").textContent = "O tempo restante é menor que 5 minutos."

    setTimeout(() => {
    toggleMode.classList.remove("hidden")
      error.classList.remove("open")
     
    }, 3000);
    return
  }

  minutes = minutes - 5

  updateDisplay(minutes, seconds)
}








