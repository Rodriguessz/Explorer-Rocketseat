export class Favorites{
    constructor(root){
        //Procura o elemento raiz do nosso projeto
        this.root = document.querySelector(root)
        this.tbody = this.root.querySelector("tbody")

        this.loadData()
    } 


    loadData(){
        this.entries =[
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
            },

            {
                "login": "ThiagoAraujot",
                "name": "Thiago Araujo",
                "public_repos": 15,
                "followers": 120
            }
        ]
    }   
}


export class FavoritesView extends Favorites{
    constructor(root){
        //Construtor super chama o construtor do classe pai 
        super(root)

        this.updateDisplay()
        this.deleteRow(0)
    }

    updateDisplay(){
        this.removeAllTr()
        this.setUserRow()
    }

    //Cria a linha da tabela, de acordo com as infos do usuário
    createRowElement(userLogin, userName , repos , followers, id){
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
    
                <td class="remove">
                    <button id="user_${id}">
                        &times;
                    </button>
                   
                 </td>
        `

        tr.id = `rowuser_${id}`

        return tr
    
    }

    //Seta a linha na tabela, de acordo com o usuário retornado
    setUserRow(){
        console.log(this.entries)
        this.entries.forEach((user, index)=>{
           const userTr =  this.createRowElement(user.login, user.name, user.public_repos, user.followers, index)
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

    deleteRow(){
        const userRows = Array.from(this.root.querySelectorAll("tr"))
        userRows.shift()
        const deleteButtons = Array.from(document.querySelectorAll("button"))
        deleteButtons.shift()

        deleteButtons.forEach((button)=>{
            button.addEventListener("click", event =>{
                let  rowUserId = button.id.replace("user_", "")
                console.log(this.entries)
                this.entries.splice(Number(rowUserId), 1)
                console.log(this.entries)
                const userRow = document.getElementById(`row${button.id}`)
                userRow.remove()


                //Remove o um indice de todos os ids, indicando a remoção do anterior no array this.entries
            for (let index = deleteButtons.length - 1; index >=0; index--){
                //Id referente ao btn atual no for
                 const rowId = deleteButtons[index].id.replace("user_", "");
    
                 if(Number(rowId) > Number(rowUserId)){
                     if (Number(rowId) - 1 > 0) {
                        deleteButtons[index].id = `user_${Number(rowId) - 1}`;
                        userRows[index].id = `rowuser_${Number(rowId) - 1}`;
                    } else {
                        deleteButtons[index].id = `user_0`;
                        userRows[index].id = `rowuser_0`;
                    }
                 }
            }

            })    

            
        })

       
    }
}