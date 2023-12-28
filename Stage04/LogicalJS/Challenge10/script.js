// /* 
//   Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

//   "Paciente X possui o IMC de: Y"

//   Onde X é o nome do paciente e Y é o IMC desse paciente

//   Crie uma função para fazer o cálculo de IMC
// */

// /* peso / (altura * altura) */


// function imcPatient(weigth , height){
//     let imc = weigth / ((height/100) ** 2)
  

//     return imc
// }


// const patients = [{name:"Enzo Rodrigues", weigth: 68.9, height: 178},{name:"Mariana Vieira", weigth: 58.9, height: 157},{name:"Breno Rodrigues", weigth: 100, height: 180}]

// console.log(patients)

// for (let patient of patients){

    

//     window.alert(`Paciente ${patient.name} possui o IMC de: ${imcPatient(patient.weigth , patient.height).toFixed(2)}`)


// }


function Student(name , test1 , test2){
  this.name = name
  this.test1 = test1
  this.test2 = test2

}

function average(test1 , test2){
  let avg = (test1 + test2)/2
  return avg
} 


const students = []

for (let i = 0; i < 1; i++){

    let name = prompt("Digite o nome do aluno:")
    let test1 = Number(prompt("Digite a nota da prova 1:"))
    let test2 = Number(prompt("Digite a nota da prova 2:"))

    const student = new Student(name , test1 , test2)

    students.push(student)
    console.log(students)

  }


  for(student of students){



    let avg = average(student.test1 , student.test2)
    let situation;
    if(avg >= 7){
      situation = "passou"
      window.alert(`A media de ${student.name} é de ${avg} e ele ${situation} no concurso`)

      
    }else{  

      situation = "não passou"
       window.alert(`A media de ${student.name} é de ${avg} e ele ${situation} no concurso!`)


    }
    
  }


  





