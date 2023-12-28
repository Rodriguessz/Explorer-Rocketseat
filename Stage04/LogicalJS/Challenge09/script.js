/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let patients = [];
let patientsName = [];
let patientsPropertys = [];

function Patient(name, age , weigth , heigth){
    this.name = name
    this.age = age
    this.weigth = weigth
    this.heigth = heigth

}

for (let i = 0; i < 1 ; i++){

    let name = prompt("Qual o nome do pacinte?")
    let age = Number(prompt("Qual a idade do paciente?"))
    let weigth = Number(prompt("Qual o peso do paciente?"))

    let heigth = Number(prompt("Qual a altura do paciente?"))

    const patient = new Patient(name, age , weigth , heigth)


    patients.push(patient)

    window.alert("Paciente cadastrado!")
    

}

for(let patient of patients){ //utilizando o for..Of para iterar sobre elemetnos do nosso array
    patientsName.push(patient.name)

    window.alert(`O ${patient.name} possui ${patient.age} anos,${patient.weigth}Kg e ${patient.heigth} de altura `)
}

console.log(patientsName)

// patients.forEach(item =>{ //Utilizando forEach() para iterar sobre os elemetos do nosso array
//     patientsName.push(item.name)
   
// })

// console.log(patientsName)

