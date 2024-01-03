
const randomNumber = Math.round(Math.random() * 10)
const errorMessage = document.createElement("p")
const sectionMainTitle = document.querySelector(".main-title")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const h2 = screen2.querySelector("h2")

let attempt  = 0;




function handleClick(){

        let inputVal = document.querySelector("#number").value;
       
        if(Number(inputVal) != randomNumber){

            errorMessage.innerText = "O número não é o mesmo!"
            sectionMainTitle.appendChild(errorMessage)
            errorMessage.classList.add("error-message")
    
            
            
        } else{
            
            
            screen1.classList.add("hide")
            const h2 = screen2.querySelector("h2")


            if(attempt > 1){
                h2.innerText = `Acertou em ${attempt} tentativas`
                
            }else{

                h2.innerText = `Acertou em ${attempt} tentativa`

            }
            
            screen2.classList.remove("hide")
            
   
        }
        
        attempt = attempt + 1
        
    }

    

function playAgain(){

    window.location.reload()
}

    
    
