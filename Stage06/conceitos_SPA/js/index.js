import "./router.js"



// const routes = {
//   //Chave comea com / e por isso definimos ela como uma string - routes["/"]
//       "/": "Stage06/conceitos_SPA/pages/home.html", 
//       "/about": "Stage06/conceitos_SPA/pages/about.html",
//       "/contact": "Stage06/conceitos_SPA/pages/contact.html",
//       404: "Stage06/conceitos_SPA/pages/404.html",
//   }

// function route(event){

//     event = event z? window.event
//     console.log(event)
//     event.preventDefault()

//     //Adiciona ao historico de navageção a url passada no terceiro arg.
//     //Não redireciona para tal, apenas add no historico e no final da url atual
//     window.history.pushState({}, "", event.target.href)


    
//     //Manipule o caminho das rotas
//     handle()
// }

// function handle(){
//     /*Desconstrução de objeto - Acesse location e traga para 
//     minha constante apenas o valor de pathname*/
//     const {pathname}= window.location


//     const route = routes[pathname] || routes[404]

    
  
//     //fetch() é uma API moderna para fazer solicitações de rede 
//     //(como HTTP) no navegador e em ambientes JavaScript.


//     //Busca route e após concluir a busca (then) traz a resposta (HTML correspondente)
//     fetch(route)
//     //Transforma o que vier do fetch em texto
//     .then(data => data.text())
//     .then(html => {
//         const divApp = document.querySelector("#app")
//         divApp.innerHTML = html

//     })
  

       
// }

// handle()

// // Necessário chamar novamente a função handle para que quando o usuário navegue entre as setas, a página mude o conteúdo
// window.onpopstate = () => handle()

// window.route = ()=> route()




