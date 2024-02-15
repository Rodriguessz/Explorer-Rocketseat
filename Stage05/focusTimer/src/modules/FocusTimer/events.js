import { controls } from "./elements.js";
import * as actions from "./actions.js"
import * as element from "./elements.js"
import state from "./state.js";
import { updateDisplay } from "./timer.js";

//Função que registra qual controle foi acionado e qual ação deve ser executada
export function registerControls (){
  //Fique observando em qual elemento ocorreu o meu clique
  controls.addEventListener("click", (event)=>{
    
    const action =  event.target.dataset.action

    if(typeof actions[action] != "function"){
      return
    }

    //Acessando uma propriedade de um objeto pela chave valor e executando
    actions[action]()
  })

}


export function setMinutes(){

  //Se o elemento estiver em foco, executa o callback
    element.clockMinutes.addEventListener("focus", ()=>{
      
      element.clockMinutes.textContent = ""

      //Deixa o elemento desfocado apenas com o teclar no enter
      window.addEventListener("keydown", (e)=>{
        if(e.key === "Enter"){
          element.clockMinutes.blur()
        }
      })
     

    })

    /* Quando uma tecla é pressionada enquanto o foco está no elemento, teste
    a expressão regular para verificar se o que foi digitado é ou não um número*/
    element.clockMinutes.onkeypress = (event) => /\d/.test(event.key)

    //Se o elemento não for mais o foco, executa o callback
    element.clockMinutes.addEventListener("blur", (event)=>{
    
    
    // Recebe o tempo do elemento que perdeu o foco, no caso 'minutes'
    let time = event.currentTarget.textContent

    /* Se o conteúdo atual de 'time' for maior que 60, define como 60, 
    caso contrário, mantém o valor adicionado pelo usuário */
      time = time > 60 ? 60 : String(time).padStart(2, "0")

      //Atribui o valor para o estado inicial do nosso timer
      state.minutes = time
      state.seconds = 0
      
      updateDisplay()
      element.clockMinutes.removeAttribute("contenteditable")


    })
    
}


