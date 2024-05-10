export class GithubFavorites{
    static searchUser(login){
        const endpoint = `https://api.github.com/users/${login}`

        return  fetch(endpoint)
        .then( res => res.json())
        .then(userData => {
             //Desestruturação do objeto retornado da promise
            const {login , name , public_repos, followers, avatar_url} = userData

            //Retorna um objeto com as informações recuperadas.
            return {
                login,
                name, 
                public_repos, 
                followers,
                avatar_url,
            }
        }
        
        )
        .catch(err => {
            console.log("Error:", err)
        })

        //Desestruruação avançada - Desetrutura o objeto 
        //já nos agrumentos da arrow function e utiliza um operador de grupo para retornar o objeto com as informaçes ({})

        // .then( ({login , name , public_repos , followers}) => ({
        //     login,
        //     name,
        //     public_repos, 
        //     followers
        // }))
    }
}
export class Favorites{
    constructor(root){
        //Procura o elemento raiz do nosso projeto
        this.root         = document.querySelector(root)
        this.tbody        = this.root.querySelector("tbody")

        this.loadData()

    } 

    loadData(){
        // this.entries = [
        //     {
        //         login: "rodriguessz",
        //         name: "Enzo Rodrigues",
        //         public_repos: "08",
        //         followers: "06"
        //     },

        //     {
        //         login: "rafafaaa",
        //         name: "Rafael Cristofali",
        //         public_repos: "08",
        //         followers: "06"
        //     },

        //     {
        //         "login": "diego3g",
        //         "name": "Diego fernandes",
        //         "public_repos": 15,
        //         "followers": 120
        //     },
            
        //     {
        //         "login": "maykbrito",
        //         "name": "Mayk Brito",
        //         "public_repos": 15,
        //         "followers": 120
        //     }
        // ]
        
        this.entries = []

        const storageData = localStorage.getItem("@githubFavorites:")

        const entries = storageData ? JSON.parse(storageData) : [];


        //Retorna uma promise com o objeto referente ao usuário do github
        GithubFavorites.searchUser("rodriguessz").then( user => {
            
        })
        
    }   

    deleteData(user){
       const filteredData  =  this.entries.filter( data => user.login !== data.login)
        this.entries = filteredData
        this.updateDisplay()
    }

    async addData(user){
        const githubUser = await GithubFavorites.searchUser(user) 
        console.log(githubUser)
    }
    

}
export class FavoritesView extends Favorites{
    constructor(root){
        //Construtor super chama o construtor do classe pai 
        super(root)

        this.updateDisplay()
        this.onAddInputSearch()
    }

    updateDisplay(){
        this.removeAllTr()
        this.setUserRow()   
    }

    //Cria a linha da tabela, de acordo com as infos do usuário
    createRowElement(userLogin, userName , repos , followers){
        const tr = document.createElement("tr")

        tr.innerHTML = `
                <td class="user">
                    <img src="https://github.com/${userLogin}.png" width="25px" alt="Imagem de perfil do gihub">
                     <a href="https://github.com/${userLogin}" target="_blank">
                        
                        <p>${userName}</p>
                        <span>${userLogin}</span>
    
                    </a>
                </td>
    
                <td class="repositories">
                    ${repos}
                </td>
    
                <td class="followers">
                    ${followers}
                </td>
    
                <td>
                    <button class="remove">
                        &times;
                    </button>
                   
                 </td>
        `

        return tr
    
    }

    //Seta a linha na tabela, de acordo com o usuário retornado
    setUserRow(){
        this.entries.forEach((user)=>{
           const userTr =  this.createRowElement(user.login, user.name, user.public_repos, user.followers)
           userTr.querySelector(".remove").onclick = () => {
            const isOk = confirm("Deseja deltar o perfil da tabela?")
            if(isOk){
                console.log("Entrou")
                this.deleteData(user)
            }
           }

            this.tbody.appendChild(userTr)
            
        })
    }

    //Remove todos as linhas da tabela
    removeAllTr(){
        const tbody = this.root.querySelector("tbody")

        tbody.querySelectorAll("tr")
        .forEach(tr =>{
            tr.remove()
        })
    }


    //Eventos do DOM
    onAddInputSearch(){
        const searchButton = this.root.querySelector("#searchButton")
        searchButton.onclick = () =>{
            const {value} =  this.root.querySelector("#search")
            this.addData(value)
            
        }
    }
}