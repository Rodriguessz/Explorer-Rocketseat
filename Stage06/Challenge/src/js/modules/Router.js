import Elements from "./Elements.js"


const elements = new Elements()

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

    // replaceState = ()=> {window.history.replaceState({}, "", "/")}
    

    handleRoute(){
        //Recupera o caminho atual

        const {pathname} = window.location
        

        //Define a rota a ser chamada
        const route = this.routes[pathname] || this.routes[404]

        //Utiliza o método fetch para carregar um arquivo do nosso projeto

        if(route){
            fetch(route)
            .then(dados => dados.text())
            .then(pageContent => {


                const divApp = elements.getElement("app", "#")
                const sectionContent = elements.getElement("content", ".")

                divApp.classList.remove("universe", "exploration")
                sectionContent.classList.remove("desktop")

                if(route.includes("universe")) divApp.classList.add("universe")
                if(route.includes("exploration")) divApp.classList.add("exploration")

                if(window.innerWidth > 770 && !route.includes("home")) sectionContent.classList.add("desktop")
                

                sectionContent.innerHTML = pageContent
                
                
            })
            .catch(error => console.log(error.message))
        }

          
           
}
}

export default Router