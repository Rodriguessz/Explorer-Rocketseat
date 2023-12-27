// // // // // //Operador de comparação - Comparam um valor e nos retorna um valor booleano
// // // // // //Operador de igualdade - Faz a comparação com a coersão de tipo (Transforma os valores para o msm tipo)
// // // let trueOrFalse = 10 == 10 // true
// // // // //  trueOrFalse = 10 == "10" // true pois faz a conversão para o mesmo tipo antes da conversão


// // // // //  //Operador de diferença = Faz a comparação com coersão de tipo
// // // // //  trueOrFalse = 10 != 10 // False
// // // // //  trueOrFalse = 10 != "10" // False
// // // // //  trueOrFalse = 10 != 9 // true


// // // // //Operador de igualdade estrita (===) - Compara o valor e o tipo, sem realizar a coersão de tip

// // // // trueOrFalse = 10 === 10 // true
// // // // trueOrFalse = 10 === "10" // false pois o tipo não é igual


// // // // //Operador de desigualdade estrita ( !== ) - Compara o valor e o tipo sem realizar a coersão de tipo

// // // // trueOrFalse = 10 !== "10" // true pois o tipo de dado é diferente
// // // // trueOrFalse = 10 != 10 // false


// // // //Operador maior que

// // // trueOrFalse = 10 > 10 // false
// // // trueOrFalse = 10 > 9 // true

// // // //Operador menor que 
// // // trueOrFalse = 10 < 11 // true
// // // trueOrFalse = 10 < 9 //false


// // // //Operador maior ou igual a

// // // trueOrFalse = 10 >= 10 // true pois é igual a 10

// // // trueOrFalse = 10 >= 11 // false pois é maior e nem igual a 11

// // // //Operador menor ou igual a 

// // // trueOrFalse = 10 <= 10 // true pois é igual a 10

// // // trueOrFalse = 10 <=9 //false pois 10 não é igual e nem menor

// // //Operadores de atribuição - Atribuem valor à uma variável

// // //Atribuição simples
// // var x = 0 

// // //Atribuição com soma 

// // x += 10 // x = x + 10

// // //Atribuição com subtração 

// // x-= 10 // x = x - 10

// // //Atribuição com multiplicação
// // x*= 10 // x = x * 10

// // //Atribuição com divisão
// // x/= 10 // x = x / 10

// // //Atribuição com resto da divisão
// // x%= 10 // x = x % 10

// // //Atribuição com exponenciação
// // x**= 10 // x = x **10


// // //Operadores lógicos - AND - OR - NOT

// // //Operador AND (&&) - True apenas quando ambas expressoes forem verdadeiras

// // const queijo = true;
// // const pao = true;
// // const carne = false;
// // const tomate = false;

// // console.log(queijo && pao) // True pois ambas valem true
// // console.log(queijo && carne) //false pois uma delas é false


// // //Operador OR (||) - True quando uma das expressões for verdadeira

// // console.log(queijo || pao) // True pois ambas valem true
// // console.log(queijo || carne) // True pois uma delas vale true
// // console.log(tomate || carne) // false pois ambas são false

// // //Operador NOT (!) - Inverte o valor de uma expressão 

// // console.log(!queijo) // Saída: false
// // console.log(!carne) // Saída: true



// //Operador condicional ternário - Simplicação de If / else

// // let pao = true
// // let queijo = true
// // let carne = false

// // const niceBreakfast = (pao && queijo) ? "Café muito bom" : "Café ruim"

// // console.log(niceBreakfast) // "Café muito bom"

// // const badBreakfast = ( pao && queijo && carne) ? "Café muito bom" : "Café ruim"
// // console.log(badBreakfast) // "Café ruim"






// //TRUTHY - Falsy - Valores sozinhos em um expressão lógica que herdam os valores de true ou false


// //Falsy :

// /*
// 	Todos os valores abaixo seriam representados como false em um boolean.
// 		false
//     0
//     -0
//     ""
//     null
//     undefined
//     NaN
// */

// const badBreakfast = 0 ? "Café bom" : "Café ruim"
// console.log(badBreakfast) //Café ruim

// //Truthy :

// /* 
// 	Todos os valores abaixo seriam representados como false em um boolean.
// 		true
//     {}
//     []
//     1
//     3.23
//     "0"
//     "false"
//     -1
//     Infinity
//     -Infinity
// */


// const niceBreakfast = "oenoneofnoenfoeno" ? "Café bom" : "Café ruim"
// console.log(niceBreakfast) //Café bom 






 








 



