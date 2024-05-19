
//Classe para manipulação dos eventos e elementos do DOM
export default class GitFavDom {
    
    //Carragemnto de dados essenciais para utilização da classe
    constructor(rootElement){
        this.root = document.querySelector(rootElement)
        this.updateDisplayTable()
    }   


    handleInputSearch(){
        const { value } = this.root.querySelector("#inputSearch")
        
        return value
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

    createUserRow(login, name, public_repos, followers){
      const tableRow = document.createElement("tr")
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

        tableRow.innerHTML = userInfos

       return tableRow
    }

    setUserRowInTable(){
       const tbody = this.root.querySelector("tbody")
       const userRow = this.createUserRow("rodriguessz", "Enzo Rodrigues", 200, 200)
    
       tbody.appendChild(userRow)
    

    }



}