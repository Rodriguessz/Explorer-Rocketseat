
//  /*
//   ** Jogo da advinhação **

//   Apresente a mensagem ao usuário:
//   "Advinhe o número que estou pensando? Está entre 0 e 10"

//   Crie um lógica para gerar um número aleatório 
//   e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

//   Enquanto o usuário não adivinhar o número, mostrar a mensagem:
//   "Erro, tente novamente:"

//   Caso o usuário acerte o número, apresentar a mensagem:
//   "Parabéns! Você advinhou o número em x tentativas"

//   Substitua o "x" da mensagem, pelo número de tentativas

// */

// window.alert("Adivinhe o número que estou pensando? Está entre 0 e 10!")

// let randomNumber = Math.round(Math.random() * 10) //Inclui zero e 10 pois arredonda pra cima se for 0.5 e pra baixo se for 0.4


// let attempt = Number(prompt("Qual o seu palpite?"))

// let attemptNumber = 1 

// prompt()

// while(attempt !== randomNumber && attemptNumber < 5)
// { //Enquanto a tentativa for um número diferente do número aleaório gerado, peça ao usuário que digite novamente

//   console.log("A tentativa não está correta, tente novamente!")

//   attempt = Number(prompt("Qual o seu palpite?"))

//   attemptNumber++
// } 


// if(attempt === randomNumber){
//     if(attemptNumber === 1){
//         console.log(`Parabéns! Voce adivinhou o número em ${attemptNumber} tentativa`)
//     }else{
        
//         console.log(`Parabéns! Voce adivinhou o número em ${attemptNumber} tentativas`)

//     }
    
// } else{
//     console.log("O número de tentativas acabou!")
// }






