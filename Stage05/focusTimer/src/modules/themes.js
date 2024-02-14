let darkMode = true //Controla o atual tema

const toggleButton = document.getElementById("toggle-mode")

//Trocando o tema com acessibilidade
toggleButton.addEventListener("click", (event)=>{

    //Verifica em qual modo a aplicação se encontra e qual irá ser aplicada
    const mode = darkMode ? "Ligth" : "Dark"

    document.documentElement.classList.toggle("light") // Adiciona ou remove a classe em nosso HTML
    event.currentTarget.querySelector("span").textContent = `${mode} mode ativado!` //Modifica o conteúdo do texto do nosso span
    darkMode = !darkMode // Inverte o valor da nossa variável controladora
})
