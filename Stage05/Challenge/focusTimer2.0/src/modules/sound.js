export const arrayBgSounds = [
  {
    sound : new Audio("./assets/interstellar.mp3"),
    name: "interstellar main soundtrack"

// Deixa tudo em loop  
  }, 


  {
    sound : new Audio("./assets/button-press.wav"),
    name: "Testando"
  }, 

  {
    sound : new Audio(""),
    name: ""
  },

  {
    sound : new Audio(""),
    name: ""
  }

]

arrayBgSounds.map(sound =>{
  sound.sound.loop = true
})


export const btnPressSound = new Audio("./assets/button-press.wav")
export const plusAndMinusSound = new Audio("./assets/minecraft_click.mp3")
export const alert = new Audio("./assets/kichen-timer.mp3")





