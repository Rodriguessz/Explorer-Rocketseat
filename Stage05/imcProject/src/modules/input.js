import { Error} from "./error.js"


//Object input - Related to the inputs elements
const Input = {
    inputs: document.querySelectorAll("input"),

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
    },

    inputHeigthFilled(){
       
    },

    inputWeigthFilled(){
       
    },

    checkInputFilled(){
        const allinputFilled = Array.from(Input.inputs).every(input => input.value.trim() !== "");

        console.log(allinputFilled)
    
        if(allinputFilled){
            Error.close()
        }
    }

}

Input.inputs.forEach((input)=>{
    input.addEventListener("input", Input.checkInputFilled)
})






export {Input}