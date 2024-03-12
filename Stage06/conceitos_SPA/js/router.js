export class Router 
{
  routes = {}

  add(routeKey, link){
    this.routes[routeKey] = link
  }


  route(event){
    event = event ?? window.event

    //Previnir a ação padrão!
    event.preventDefault()

    //Adiciona ao historico, mas nao redireciona
    window.history.pushState({}, "", event.target.href)


    this.handle()
  }



  replaceState = window.history.replaceState({}, "", "/")

  handle(){

    const {pathname} = window.location

    const route = this.routes[pathname] || this.routes[404]


    //API fetch() - Promise -Objeto da requisição - Sucess , Rejected & Pending
    fetch(route)
    .then(data => data.text())
    .then(html => {
      const divApp = document.querySelector("#app").innerHTML = html
    })
    
  }
  
}



