export class GithubFavorites{
    
}
export class Favorites{
    constructor(root){
        //Procura o elemento raiz do nosso projeto
        this.root         = document.querySelector(root)
        this.tbody        = this.root.querySelector("tbody")

        this.loadData()

    } 


    loadData(){
        // this.entries =[
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

        const entries = localStorage.getItem("@githubFavorites:") || [];
        
        console.log(entries)
    }   

}
export class FavoritesView extends Favorites{
    constructor(root){
        //Construtor super chama o construtor do classe pai 
        super(root)

        this.updateDisplay()
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
                this.delete(user)
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
}