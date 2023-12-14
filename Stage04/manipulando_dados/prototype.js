// // //Prototypes - __proto__ - Proto chain

// // const pessoa = {
// //     name: "Enzo",
// //     age: 20,
// //     city: "São Paulo",
// //     gender: "Male"
// // }

// // // console.log(pessoa.__proto__)//Acessando o prototipo do objeto pessoa 



// // const methods = { //Criando um prototype para atribut ao objeto pessoa
// //     walk: ()=>{
// //         return "Andou"
// //     },

// //     run: ()=>{
// //         return "Correu"
// //     }
// // }

// // //Atribuindo a pessoa, o prototype que criamos (Utilizando a function)

// // Object.setPrototypeOf(pessoa, methods)
// // console.log(pessoa.walk())


// // //Criando um objeto novo com base em um prototype especifico

// // const methodsCar = { //Prototipo criado por mim que será atribuido ao novo objeto Carro
// //     speedUp: ()=>{
// //         return "Acelerou"
// //     },


// //     slowDown: ()=>{
// //         return "Desacelerou"
// //     }
// // }

// // const car = Object.create(methodsCar)

// // // console.log(car) // Objeto vazio herdando funcionalidades do prototipo methodsCar

// // car.name = "T-cross"
// // car.year = "2023"

// // car.speedUp() //Método herdado do prototype methodsCar



// //Representando a cadeia de prototipos

// const dog = {
//     race:"Golden",
//     color:"White",
//     age: 1,

// }

// //Cria um objeto vazio tendo como prototype "dog"
// const skills = Object.create(dog)

// skills.toRoll = function(){
//     return console.log("Rolou")
// }


// //Cria um objeto vazio tendo como prototype "skills"

// const dog1 = Object.create(skills)

// dog1.name= "Simba"

// dog1.race // Propriedade herdada do proto dog
// dog1.toRoll() // Método herdado do proto skills









