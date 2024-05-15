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
        
        const storageData = localStorage.getItem("@githubFavorites:")

        //Utilizando o JSON.parse() para transformar o JSON vindo em um objeto manuseavel
        this.entries = storageData ? JSON.parse(storageData) : [];
        console.log(this.entries)
        
    }   

    saveUserInLocalStorage(){

        //Utilizamos o JSON.stringfy() para transformar um objeto, array em JSON para que seja possivel adicionalos no localStorage
        localStorage.setItem("@githubFavorites:", JSON.stringify(this.entries))
    }
    
    async addUserInTable(user){

        try{

            //O método find retorna o dado caso a condição retorne true, no nosso caso retorna o objeto referente ao usuario
            const userExists = this.entries.find( entry => {
                if((entry.login).toLowerCase() === user){
                    return true
                }
            })

            //Verifica se existe
            if(userExists) {
                throw new Error("Usuário já cadastrado na tabela!")
            }

             //Precisamos utilizar o await pois a função SearchUser é uma promise a ser resolvida
            const githubUser = await GithubFavorites.searchUser(user)


            //Faz a verificação para ver se o usuário existe.Caso usuário não seja encontrado, retorna erro.
            if(githubUser.login === undefined){
                throw new Error("Não foi possivel encontrar o usuário")
            }

            
            


            // this.entries.forEach((user) => {
            //     if(githubUser.login === user.login) throw new Error("Usuário Já cadastrado na tabela!")
            // })

            //Adicionando o usuário encontrado em nosso array de dados utilizando o spread Operator

            //Spread operator -> Operador usado para desmembrar elementos de um objeto iteravel

            //Meu array irá receber o meu usuário pesquisado mais os que já tinham, spread operator irá espalhar os elementos que já haviam sido adicionados
            //e acrescentar no meu array.

            this.entries = [githubUser, ...this.entries]
            this.updateDisplay()
            
            //Salvando nossos usuários já inseridos no localStorage para persistirem em nossa sessão
            this.saveUserInLocalStorage()
            
        }catch(error){
            alert(error)
        }

       
    }

    deleteData(user){
       const filteredData  =  this.entries.filter( data => user.login !== data.login)
        this.entries = filteredData
        this.updateDisplay()

        //Chamando a função para salvar no localStorage para que o nosso dado filtrado seja atualizado de forma correta.
        this.saveUserInLocalStorage()
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
            const isOk = confirm("Deseja deletar o perfil da tabela?")
            if(isOk){
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
            this.addUserInTable(value)
            
        }
    }
}