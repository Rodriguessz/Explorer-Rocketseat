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


export {Error}