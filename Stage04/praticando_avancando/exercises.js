//1. Declare um variável de nome weight

let weight;

//2. Que tipo de dado é a variável acima?

console.log(typeof weight) //undefined

//3. Declare uma variável e atribua valores para cada um dos dados

let Username = "Enzo Rodrigues" , age = 20  ,isAdm = true 

weight = 66.9

//4. A variável student abaixo é de que tipo de dados?

let student = {}
console.log(typeof student) //Object

//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

student.name = Username
student.age = age
student.weight = weight
student.isAdm = isAdm
console.log(student)


//4.2 Mostre no console as seguintes mensagens
/*
<name> de idade <age> pesa <weight> pelos valores de cada objeto
*/

console.log(`${student.name} tem ${student.age} anos de idade e pesa ${student.weight}Kg`)

//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio

let students = []

//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

students.push(student)


//7. Coloque no console o valor da posição zero do array acima
console.log(students[0])

//8. Crie um novo student e coloque ele na posição do Array students

const student2 = {}

students.push(student2)

console.log(students)
//9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
/*
console.log(a)
var a = 1

//Resposta : O valor será undefined pois a var sofre o hoisting (elevação), ou seja, ela será declarada primeiro mas somente depois irá ser atribuida a um valor.
*/