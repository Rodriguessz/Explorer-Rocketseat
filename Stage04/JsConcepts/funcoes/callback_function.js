// //Entendendo uma callback function


// //Callback, chamada após uma certa ação ou evento


// function sayMyName(callback){ //Declarando a function com uma parametro em sua declaração

//   console.log("Antes de entrar na minha callback")
//   callback() //Acionando a function de callback esperada ser recebida no parametro

//   console.log("Saiu da minha callback")

// }

// sayMyName(()=>{ //Passa uma function como argumento
//   console.log("Entro na minha callback function")
// },)