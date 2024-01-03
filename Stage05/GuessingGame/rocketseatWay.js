const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleClick(event) {

//   event.preventDefault()

  const inputNumber = document.querySelector('#number')
  console.log(typeof inputNumber.value)

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector('.screen1').classList.add('hide')
    document.querySelector('.screen2').classList.remove('hide')

    document.querySelector(
      '.screen2 h2'
    ).innerText = `acertou em ${xAttempts} tentativas`
  }

  xAttempts++
}


