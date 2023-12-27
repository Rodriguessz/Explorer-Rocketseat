//Estrutura de repetição for In


//For in em JavaScript - Cria um loop em um objeto e pega as propriedades referentes a cada iteração.

const person = {
    name: 'Mariana',
    age: 20,
    weigth: 56
}

for (let property in person){ // Na primeira iteração a propriedade será "name", na segunda "age" e na terceira "weigth"
    
    console.log(`${property}: ${person[property]}`)
}