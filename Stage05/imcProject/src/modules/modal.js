
import {Input} from './input.js'
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
//Close the card when Enter key is Clicked.
window.addEventListener("keydown", (e)=>{
    
   if(e.key === 'Escape' && !Modal.modalPopUp.classList.contains("hidden")){
        // e.preventDefault() - If the key was Enter, it would be necessary.

        Modal.closeCard()
   }
})  


export {Modal}