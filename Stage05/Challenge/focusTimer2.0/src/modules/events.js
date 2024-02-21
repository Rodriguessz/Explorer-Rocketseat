import {controls, clockMinutes, sounds, arraySounds} from "./elements.js"
import state from "./stateTimer.js"
import * as actions from "./actions.js"
import { updateDisplay } from "./timer.js"
import * as soundsBg from "./sound.js"





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

export function registerControlsSounds(){
  sounds.addEventListener("click" , (e)=>{
    
    const sounds = Array.from(arraySounds)
    const clickedElement = e.target
    const action = clickedElement.dataset.action
    const bgSounds = soundsBg.arrayBgSounds
   
    bgSounds.forEach(sound =>{
      sound.sound.currentTime = 0;
      sound.sound.pause()
    })

   

    sounds.map(sound =>{

      if(sound.classList.contains("active")){
        sound.classList.remove("active")
      }

     

    })

    clickedElement.classList.add("active")

 
    
    
    switch (action){
      case "sound1":
        soundsBg.arrayBgSounds[0].sound.play()
        break

      case "sound2":
        soundsBg.arrayBgSounds[1].sound.play()
        break

      case "sound3":
        soundsBg.arrayBgSounds[2].sound.play()
        break
      case "sound4":
        soundsBg.arrayBgSounds[3].sound.play()
        break

      
    
    }


    
    
  
  })
}