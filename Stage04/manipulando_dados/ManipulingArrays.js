// //Manipulando Arrays 

// const people = ["Enzo" , "Rodrigo" , "André" , "Janaina", "Breno"]

// //Adicionar um item no fim do array - Método push("VALOR")
// people.push("Mariana") // Retorna o comprimento do array após a inserção
// console.log(people)


// //Adicionar um item no começo do array - Método unshift("VALOR")
// people.unshift("Gildenise") // Retorna o comprimento do arrat após a inserção no inicio
// console.log(people)

// //Remover um item do final do array - Método pop()
// const lastPerson = people.pop() // Remove o último  item do array e o retorna 
// console.log(lastPerson)// Mariana
// console.log(people)

// //Remover um item do começo do array - Método shift() 

// const firstPerson = people.shift() // Remove o primeiro elemento do array e o retorna
// console.log(firstPerson) //Gildenise
// console.log(people)

// //Pegar somente alguns elemento do array - Método slice(começo, fim ( contar a partir do 1))
// const itens = ["Bola", "Protetor", "Carteira", "Dinheiro"]
// const someItens = itens.slice(2,4) //Começa no index 2 e termina no item de posição 4 do meu array
// console.log(someItens)


//Remover um ou mais itens em qualquer posição do array - Método splice(inicio, quantidade , Elemento1 , Elemento2 , ... ElementoN)

// const itens = ["Bola", "Protetor", "Carteira", "Dinheiro"]
// console.log(itens)

// itens.splice(1,2, "Ipad", "Toalha" , "JBL") //Remove dois itens a partir do index 1 e adiciona os itens passados no argumento
// console.log(itens)


//Encontrar a posição de um elemento no array

const teams = ["Palmeiras", "Fluminse", "São Paulo", "Botafogo"]
const indexPalmeiras = teams.indexOf("Palmeiras") //Retorna o index do item "Palmeiras no array"

console.log(teams[indexPalmeiras])








