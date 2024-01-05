// Variables
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const fortuneCookie = document.querySelector('#fortuneCookie')

const luckMessage = screen2.querySelector('#luckMessage')

const btnAnother = screen2.querySelector("#openAnother")

const arrayMessages = [
    "Acredite em si mesmo e todos os seus sonhos se tornarão realidade.",
    "A paciência é a chave para abrir as portas do sucesso.",
    "Seja grato pelo que você tem e mais virá até você.",
    "O sucesso está na jornada, não apenas no destino.",
    "A perseverança é a mãe da boa sorte.",
    "Sua felicidade está em suas próprias mãos.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "O otimismo é o ímã da felicidade e prosperidade.",
    "Cada novo dia traz novas oportunidades.",
    "A sorte favorece a mente preparada.",
    "Nunca é tarde demais para ser quem você poderia ter sido.",
    "Seja a mudança que você deseja ver no mundo.",
    "A vida é 10% do que acontece conosco e 90% de como reagimos a isso.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "Quanto mais você agradece, mais coisas boas acontecem.",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    "A imaginação é mais importante que o conhecimento.",
    "Você é o autor da sua própria história.",
    "Acredite no impossível e conquiste o improvável.",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
    "A sorte é o que acontece quando a preparação encontra a oportunidade.",
    "Cada dia é uma nova oportunidade para ser melhor que ontem.",
    "O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "Nunca é tarde demais para definir outro objetivo ou sonhar um novo sonho.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "A única limitação é a que você coloca em si mesmo.",
    "Quando uma porta da felicidade se fecha, outra se abre, mas muitas vezes olhamos tanto para a porta fechada que não vemos a que foi aberta para nós.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A sorte favorece a mente que se prepara.",
    "A vida é curta, aproveite cada momento.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
  ];
  
let arrayIndex = Math.round(Math.random() * 30)


//Functions

//Open the cookie and shows the luck message
function handleCookieOpening(){
    
    luckMessage.innerText = arrayMessages[arrayIndex]
    toogleScreen()
   
  
}

//Back to the main page, so that users can open another cookie

function handleAnotherCookieOpening(){
    arrayIndex = Math.round(Math.random() * 30)
    toogleScreen()
    

}

// Active callbacks if the user press enter key

function enterPressed(e){
   
    if(e.key == "Enter" && !screen1.classList.contains('hidden')){
        handleCookieOpening()
    }else if(e.key == "Enter" && screen1.classList.contains('hidden')){
        handleAnotherCookieOpening()
    }

   
}

// Responsable to switch the screens
function toogleScreen(){
    screen1.classList.toggle('hidden')
    screen2.classList.toggle('hidden')
}



//Callbacks

fortuneCookie.addEventListener('click', handleCookieOpening)

btnAnother.addEventListener('click' , handleAnotherCookieOpening)

document.addEventListener('keydown', enterPressed)





