//Declarando uma arrow function

const walk = (meters) => { // Não ocorre o hoisting pois é declarado com const
    console.log(`Eu andei ${meters} metros.`);
}

walk(10) //Aciona a function passando como argumento o 10.