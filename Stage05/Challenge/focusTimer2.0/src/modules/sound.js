export const arrayBgSounds = [
  {
    sound : new Audio("./assets/interstellar.mp3"),
    name: "interstellar main soundtrack"

// Deixa tudo em loop  
  }, 


  {
    sound : new Audio("./assets/button-press.wav"),
    name: "Teste"
  }
  
]





arrayBgSounds.map(sound =>{
    sound.sound.loop = true
})
