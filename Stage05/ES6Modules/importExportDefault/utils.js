/*Default Import e Export - Não precisamos nos preocupar em importar o dado com 
seu nome especifico, podemos importar com qualquer Identificador*/


const showDate = (date) => {

    return console.log(`Data de hoje: ${date}`)

}




//Utilizando o export default (Somente é permitido utilizar um Default Import/Export)
export default showDate;
