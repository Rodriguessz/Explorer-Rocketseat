// /*

//   Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
//   Olá usuário! Digite o número da opção desejada

//     1. Cadastrar um item na lista
//     2. Mostrar itens cadastrados
//     3. Sair do programa
  
//   --- 
//   O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

//   Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
//   Caso o usuário digite 2, ele poderá ver os itens cadastrados
//     Se não houver nenhum item cadastrado, mostrar a mensagem: 
//       "Não existem itens cadastrados"
//   Caso o usuário digite 3, a aplicação deverá ser encerrada.

// */

// let itens = []
// let options = [1 , 2 , 3]

// console.log(`Olá usuário! Digite o número da opção:

// 1. Cadastrar um item na lista
// 2. Mostrar itens cadastrados
// 3. Sair do programa`)



// let option =  Number(prompt("Selecione uma das opções"))

// while (!(option in options)){
//     window.alert('Opção inválida')
//     option = Number(prompt("Selecione uma das opções"))
// }


// // while(option != 3){


// //     switch(option){
// //         case 1 :
// //             let newItem = prompt('Digite um novo item para adicionar à lista: ')

// //             while (newItem === ""){
// //                 window.alert('Por favor, o campo deve ser preenchido')
// //                 newItem = prompt('Digite um novo item para adicionar à lista: ')
// //             }
            
// //             itens.push(newItem)
// //             window.alert("Item cadastrado com sucesso!")

// //             option = Number(prompt("Selecione uma das opções"))



// //             break
// //         case 2 :
// //             if (itens.length === 0){
// //                 window.alert("A lista de itens está vazia")

// //                 let answer = prompt("Deseja adicionar um item a lista? S/N").toLowerCase()

// //                 if(answer === "s"){
// //                     itens.push(prompt("Qual é o item que você deseja adicionar?"))
// //                 } 
// //             }
// //                 window.alert(`Lista de itens: ${itens}`)
// //                 option = Number(prompt("Selecione uma das opções"))

// //             break
// //         case 3:
// //             break
// //         default :
// //             window.alert("Opção inválida!")

// //     }

// // }


// while(option != 3){

//     if(option == 1){
//         let newItem = prompt('Digite um novo item para adicionar à lista: ')

//         while(newItem === ""){
//             window.alert("O campo deve ser preenchido!")

//             newItem = prompt('Digite um novo item para adicionar à lista: ')

//         }

//         itens.push(newItem)
//         window.alert("Item cadastrado com sucesso!")

//         option = Number(prompt("Selecione uma das opções"))
//     }

//     if(option == 2){
//         if(itens.length == 0){
        
//         window.alert("A lista está vazia!")
    
//         let answer = prompt("Deseja adicionar um item novo a lista? S/N").toLowerCase()
    
//         if(answer === "s"){
    
//             newItem = prompt('Digite um novo item para adicionar à lista: ')
    
//             while(newItem === ""){
//                 window.alert("O campo deve ser preenchido!")
    
//                 newItem = prompt('Digite um novo item para adicionar à lista: ')
    
    
//             }
            
//             itens.push(newItem)
//             console.log("Item cadastrado com sucesso!")
//             option = Number(prompt("Selecione uma das opções"))

//         }else{
//             option = Number(prompt("Selecione uma das opções"))
//         }
//     }else{
//         window.alert(`Lista de itens: ${itens}`)

//         option = Number(prompt("Selecione uma das opções"))

//     }
        
       

//     }


    

    
    
       
// }


// window.alert("Obrigado por utilizar o programa!")
   
 






