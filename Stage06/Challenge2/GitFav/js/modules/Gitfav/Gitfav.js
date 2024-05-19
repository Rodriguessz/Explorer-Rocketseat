import { GithubUsers } from "../GithubApi/GitUsers.js";


export class GitfavData{
    constructor(){
        this.preloadData()
    }


    preloadData(){

        const localStorageData =  localStorage.getItem("@githubFavorites:")
        this.usersData = localStorageData ? JSON.parse(localStorageData) : [];
    }

    saveUsersDataInLocalStorage(data){
        localStorage.setItem("@githubFavorites:", JSON.stringify(data))
    }

   async addUserDataInTable(user){

        try{

            const userData = await GithubUsers.searchUser(user)
            const userExists = this.usersData.find((user)=> userData.login === user.login)

            if(userData.login === undefined) throw new Error("Usuário não encontrado!")
    
            if(userExists) throw new Error("Usuário já favoritado!")

            

            //Usando o conceito de imutabilidade e spread operator
            this.usersData = [...this.usersData, userData]

            this.updateDisplayTable()
            this.saveUsersDataInLocalStorage(this.usersData)
            
            
        }catch(error){
            alert(error)
        }
        
   }

   removeUserDataFromTable(user){
    //Usando o filter para retirar o usuário clicado para deletar do array
    const filteredData = this.usersData.filter(data => data.login !== user.login)
    this.usersData = filteredData

    this.updateDisplayTable()
    this.saveUsersDataInLocalStorage(this.usersData)
}

}



//Classe para manipulação dos eventos e elementos do DOM
export class GitFavDom  extends GitfavData{
    
    //Carragemnto de dados essenciais para utilização da classe
    constructor(rootElement){

        //Carrega os métodos da classe pai
        super()

        this.root = document.querySelector(rootElement)
        this.updateDisplayTable()
        this.handleButtonSearch()
    }   


    handleInputSearch(){
        const { value } = this.root.querySelector("#inputSearch")
        this.addUserDataInTable(value)
    }

    handleButtonSearch(){
        const buttonSearch = this.root.querySelector("#searchButton")
        
        buttonSearch.onclick = () => this.handleInputSearch()

    }

    updateDisplayTable(){
        this.removeAllUsersFromTable()
        this.setUserRowInTable()
    }
    
    removeAllUsersFromTable(){
        const tableRows = this.root.querySelectorAll("tbody tr") 
        tableRows.forEach((row) => row.remove())
    }

    createUserRow(login = "", name = "", public_repos = 0, followers= 0){
        const tableRow  = document.createElement("tr")
        const userInfos =   `
        
        <td class="user">
            <img src="https://github.com/${login}.png" alt="">
            <a href="https://github.com/${login}">
                <p>${name}</p>
                <span>${login}</span>
            </a>
            
        </td>

        <td>
            ${public_repos}
        </td>

        <td>
            ${followers}
        </td>

        <td>
            <button id="deleteUser">Delete</button>
        </td>

`
        const noUserRow = document.createElement("tr")
        noUserRow.classList.add("no-favs-tr")
        const noUser    = `
        
        <td class="no-fav-td">
                <img src="./assets/svg/gitStar.svg" alt="Estrela cinza">

                <h2>No favorites yet!</h2>
        </td>
        
        `
       
        tableRow.innerHTML  = userInfos
        noUserRow.innerHTML = noUser

        return {tableRow, noUserRow}
    }

    setUserRowInTable(){
       const tbody = this.root.querySelector("tbody")

       if(!this.usersData.length > 0){
            const rowsTable = this.createUserRow()
            tbody.appendChild(rowsTable.noUserRow)
            return
       }

       this.usersData.forEach((data) =>{
            const dataRow = this.createUserRow(data.login, data.name, data.public_repos, data.followers)
            const deleteButon = dataRow.tableRow.querySelector("#deleteUser")

            deleteButon.onclick = () => {
                const deleteUser = confirm(`Deseja desfavoritar o usuário "${data.login}"?`)

                if(deleteUser) this.removeUserDataFromTable(data)
            }
            
            tbody.appendChild(dataRow.tableRow)
            
       } )
       
        

    }



}