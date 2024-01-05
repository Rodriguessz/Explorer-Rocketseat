
//Variables 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const sectionMainTitle = document.querySelector(".main-title")
const errorMessage = document.createElement("p")

const h2 = screen2.querySelector("h2")

const btnTry = document.querySelector("#try")
const btnAgain = document.querySelector("#tryAgain")

let randomNumber = Math.round(Math.random() * 10)
let attempt  = 1;


//Functions

//Function handleTryClick - Verify if the input value is the same to the random number
function handleTryClick(event){

    //Prevent the button's default event
    event.preventDefault();

    //Select the input element from HTML
    let inputNumber = document.querySelector("#number");
   

     //Get the user's answer and verify
     
    if(Number(inputNumber.value) == "" || isNaN(Number(inputNumber.value)) ){ //NOTE: isNan() checks if the value is a NaN.

        errorMessage.remove()
        showErrorMessage("Um número deve ser digitado!")
        
    }else if(Number(inputNumber.value) > 10 || inputNumber.value < 0){

        errorMessage.remove()
        showErrorMessage("O número deve estar entre 0 e 10!")
        
    }else if(Number(inputNumber.value) != randomNumber){
        errorMessage.remove()
        showErrorMessage("O número não é o mesmo!")    
    } else{
        toggleScreens()
        attempt > 1 ? h2.innerText = `Acertou em ${attempt} tentativas` :  h2.innerText = `Acertou em ${attempt} tentativa`
        
    }


    
    
    // Restart the input value to a empty string.
    inputNumber.value = "" 

    //Controls the attempts
    attempt = attempt + 1
        
 }

//Function handleResetClick - Reload the page to send the user for the first step of the game!
function handleResetClick(){
    //In this way, the random number keeps the same, for that reason its necessary generate a new random number again.
    // toggleScreens()
    // attempt = 1;
    // randomNumber = Math.round(Math.random() * 10)
    // errorMessage.remove()

    //Using the reload() method, is not necessary do it again.  
    window.location.reload()
}

//Function toggleScreens - Responsable to switch the screens.
function toggleScreens(){

    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

// Function showErrorMessage - Show an error message in the screen if the user input something wrong.
function showErrorMessage(string){
     errorMessage.innerText = string
     errorMessage.classList.add("error-message")
     sectionMainTitle.appendChild(errorMessage)
}

function pressEnterKey(e){
    if(e.key == "Enter" && screen1.classList.contains('hide')){
        handleResetClick()   
    }

    if(e.key == "Enter" && !screen1.classList.contains('hide')){
       
        handleTryClick(event)

    }
}


//Callbacks

//Add a listener to the button element. When the listener register an "click" event from user, the callback will be activated.
btnTry.addEventListener("click", handleTryClick) 

btnAgain.addEventListener("click", handleResetClick)

//Add a listener on the document to see if the user pressed the Enter "Key" and is on the screen2.
document.addEventListener("keydown", pressEnterKey)




    
    
