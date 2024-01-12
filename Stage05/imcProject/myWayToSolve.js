
// Structuring element data

//Object Error - Related to the error element
const Error = {

    divError : document.querySelector(".error-message"),

    errorMessage : document.querySelector("#errorMessage"),

    showMessage(error){
        this.errorMessage.innerText = error
    },

    open(){
        this.divError.classList.remove("hidden")
    },

    close(){
        this.divError.classList.add("hidden")
    }


}

//Object input - Related to the inputs elements

const Input = {
    
    inputWeigth : document.querySelector("#weight"),

    inputHeigth : document.querySelector("#height"),

    //Ensure that the fields are filled correctly.
    validation(){

            if(this.inputHeigth.value == "" || this.inputWeigth.value == ""){
          
                return `Os campos precisam ser preenchidos`
        
            } else if(isNaN(Number(this.inputHeigth.value)) || isNaN(Number(this.inputWeigth.value))){
         
               return `Somente valores númericos aceitos`}else{
                return null
            }
    },

    clearAll(){

        this.inputWeigth.value= ""
        this.inputHeigth.value= ""
    },

    clearInput(input){
        input.value = ""
    }
    

}
   
        
//Object Modal - Related to the modal
const Modal = {

    modalPopUp: document.querySelector(".modal-popup"),

    modalCard : document.querySelector(".modal"),

    modalPopUpMessage : document.querySelector("#imcMessage"), //Just the message inside the card



    open(){
        this.modalPopUp.classList.remove("hidden")
    },

    close(){
        this.modalPopUp.classList.remove("hidden")
    },


    message (imc){

        this.modalPopUpMessage.innerText = `O seu IMC é de ${imc}`
    },

    // Add an animation to the close card action
    closeCard(){

        Modal.modalCard.animate({
            transform: ["scale(1)", "scale(0)"],
        }, {
            fill:"none",
            duration: 1000,
            
        } )

        Modal.modalPopUp.animate({
            opacity: ["1", "0"]
        },{
            duration: 1000
        })


        setTimeout(()=>{
        Modal.modalPopUp.classList.add("hidden")
            
        },1000)

        Input.clearAll()
    },

    

}

//Object Button - Related to the buttons on the application
const Button = {

    btnIMC : document.querySelector("#imcButton"),
    closeBtn : document.querySelector("#close"),

    calculateImc(e){
        
        e.preventDefault()

        //Receive the return of validation function from Input object
        const error = Input.validation()
    
        //Verify if exists an error
         if(error){  
             Error.showMessage(error)
             
             Error.open()
            
    
         }else{  
    
            Error.close()
    
            const resultImc = imcCalc(Number(Input.inputHeigth.value), Number(Input.inputWeigth.value))
    
            Modal.message(resultImc)
    
            Modal.open()
    
            
            
    
        }
    },


    handleCalculate(){
        this.btnIMC.addEventListener("click", this.calculateImc)
    },


    closeModalCard(){
        this.closeBtn.addEventListener("click", Modal.closeCard)
    }
}


//Functions

// Calculate the IMC
function imcCalc(altura, peso){

    const weight = peso
    const height = altura

    const calc = weight / (height/100) ** 2

    
    return calc.toFixed(2)

    
}


Button.handleCalculate()
Button.closeModalCard()







