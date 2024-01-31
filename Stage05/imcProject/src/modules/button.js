import {Error} from './error.js'
import {Modal} from './modal.js'
import {Input} from './input.js'
import imcCalc from '../myWayToSolve.js'


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


Button.handleCalculate()
Button.closeModalCard()