export const arrayBgSounds = [
  {
    sound : new Audio("./assets/interstellar.mp3"),
    name: "interstellar main soundtrack"

// Deixa tudo em loop  
  }, 


  {
    sound : new Audio(""),
    name: ""
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

export const btnPressSound = new Audio("./assets/button-press.wav")






arrayBgSounds.map(sound =>{
    sound.sound.loop = true
})
