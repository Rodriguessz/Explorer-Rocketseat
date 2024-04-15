export class FavoritesTable{
    constructor(root){
        //Procura o elemento raiz do nosso projeto
        this.root = document.querySelector(root)
        this.tbody = this.root.querySelector("table tbody")

        //Carrega os dados 
        this.loadData()
    }

    loadData(){
        this.entries = [
            {
                login: "rodriguessz",
                name: "Enzo Rodrigues",
                public_repos: "08",
                followers: "06"
            },

             {
                login: "rafafaaa",
                name: "Rafael Cristofali",
                public_repos: "08",
                followers: "06"
            },

            {
                "login": "diego3g",
                "name": "Diego fernandes",
                "public_repos": 15,
                "followers": 120
            },
            {
                "login": "maykbrito",
                "name": "Mayk Brito",
                "public_repos": 15,
                "followers": 120
            }

        ]

    
    }

}


export class FavoritesView extends FavoritesTable{
    constructor(root){
        //Construtor super chama o construtor do classe pai 
        super(root)

        this.updateDisplay()
        this.fillUserRow()
    }

    updateDisplay(){
        this.removeAllTr()

    }

    createTr(loginUser,userName, repos, followers){
        const tr = document.createElement("tr")

        tr.innerHTML = `
             <tr>
                <td class="user">
                    <img src="https://github.com/${loginUser}.png" width="25px" alt="Imagem de perfil do gihub">
                     <a href="https://github.com/${loginUser}" target="_blank">
                        
                        <p>${userName}</p>
                        <span>${loginUser}</span>
    
                    </a>
                </td>
    
                <td class="repositories">
                   ${repos}
                </td>
    
                <td class="followers">
                   ${followers}
                </td>
    
                <td class="remove">
                    <button>
                        &times;
                    </button>
                   
                 </td>
            </tr>
        
        
        
        `

        return tr
    }
    
    fillUserRow(){
         const data = this.entries

        data.forEach(user =>{
            const rowUser = this.createTr(user.login,user.name, user.public_repos, user.followers)
            this.tbody.appendChild(rowUser)
        })
    }

    removeAllTr(){
        this.tbody.querySelectorAll("tr")
        .forEach(tr =>{
            tr.remove()
        })
    }
}