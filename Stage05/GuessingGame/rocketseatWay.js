const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
const btn = document.querySelector('#try')
const btnAgain = document.querySelector('#tryAgain')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')


function handleClick(event) {

    event.preventDefault();
    // console.log(event)

   const inputNumber = document.querySelector('#number')


  if (Number(inputNumber.value) == randomNumber) {
      screen1.classList.add('hide')
      screen2.classList.remove('hide')

      document.querySelector(
      '.screen2 h2'
      ).innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""
  console.log(inputNumber.value)
  xAttempts++
}


function tryAgain(){
  //Dessa forma o número gerado continua sendo o mesmo, por isso é necessário gerar novamente
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    attempt = 1;
}

//Acionando a funcão utilizando o método addEventListener()
btn.addEventListener("click", handleClick)
btnAgain.addEventListener("click", tryAgain)


