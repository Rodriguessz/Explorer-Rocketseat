//Errors
const divError = document.querySelector(".error-message")
const errorMessage = document.querySelector("#errorMessage")

//Form

const form = document.querySelector("form")

//Button
const closeBtn = document.querySelector("#close")


//Estuturando dados do elemento modal

const Modal = {

    modalSection: document.querySelector(".modal-popup"),

    modalMessage: document.querySelector("#imcMessage"),

    open(){
        this.modalSection.classList.remove("hidden")
    },

    close(){
        this.modalSection.classList.add("hidden")
    },

    message(message){
        this.modalMessage.innerText = message
    }
}


//Estruturando dados do elemento input

const Input = {

    inputHeigth: document.querySelector("#height"),

    inputWeigth: document.querySelector("#weight"),

    clearAll(){

        this.inputWeigth.value= ""
        this.inputHeigth.value= ""
    },

    clear(input){
        input.value = ""
    },
}

//Functions
function imc(weigth, heigth){
    return (weigth/(heigth /100) ** 2).toFixed(2)
}


//Maneiras de chamar a função ao envio do formulário
form.onsubmit = function (event) {

    event.preventDefault() // Previne a ação padrão do fomrulário (Enviar e recarregar)
    console.log(event)
    //Input values

    const heigth = Input.inputHeigth.value
    const weigth = Input.inputWeigth.value

    const result = imc(weigth, heigth)
    const message = `O seu IMC é de ${result}`

    Modal.message(message)
    Modal.open()


}

closeBtn.onclick = function(){
   Modal.close()
   Input.clearAll()
}









