
//Declarando uma variável com a palavra reservada let dentro de um escopo de bloco

//Bloco {}
// {  

//    console.log(y) // Não é possivel acessar Y antes de inicialização (Hoisting ocorre apenas com var)
//    let y = 10;
//    console.log(y) // 10

// }


//Declarando uma variavel com Const



{
   const nome = "Sou local"
   // nome = "Não sou local" // Não podemos alterar o valor de uma const
}

console.log(nome) // Reference error



