import {controls, clockMinutes} from "./elements.js"
import state from "./stateTimer.js"
import * as actions from "./actions.js"
import { updateDisplay } from "./timer.js"





export function registerControls(){
  controls.addEventListener("click", (event)=>{
    
    const action = event.target.dataset.action
    
    if(typeof actions[action] != "function"){
      return "Not a function"
    }

    actions[action]()
    
    return action
  })
}


export function setTime(){
  clockMinutes.addEventListener("focus", ()=>{

    clockMinutes.textContent = ""

    window.addEventListener("keydown", (e)=>{
      if(e.key === "Enter"){
        clockMinutes.blur()
      }
    })
   


    
  })

  clockMinutes.onkeypress = (event) => /\d/.test(event.key)

  clockMinutes.addEventListener("blur", (event)=>{
    

    let time = event.currentTarget.textContent
    console.log(time)

    time = time > 60 ? 60 : String(time).padStart(2, "0")

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    clockMinutes.removeAttribute("contenteditable")

  })
}