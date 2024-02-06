import { controls } from "./elements.js";
import * as actions from "./actions.js"

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