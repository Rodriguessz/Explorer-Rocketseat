class Router {

    routes = {}

    //Função para criar rotas
    addRoute(route, url){
        this.routes[route] = url
    }

    route(event){
        //Nulish operator - Null>true = win.event | Null>False = event
        event = event ??window.event

        //Previne a ação default
        event.preventDefault()

        //Adiciona caminho no historico de nav do 
        console.log(event.target.href)
        window.history.pushState({},"",event.target.href)

        this.handleRoute()

    }

    replaceState = ()=> {window.history.replaceState({}, "", "/stage06/challenge/")}
    

    handleRoute(){
        //Recupera o caminho atual

        const {pathname} = window.location
        console.log(pathname)

        //Define a rota a ser chamada
        const route = this.routes[pathname] || this.routes[404]
        console.log(route)

        //Utiliza o método fetch para carregar um arquivo do nosso projeto

        // fetch(route).
        // then(data => console.log(data))
    }

    
}

export default Router