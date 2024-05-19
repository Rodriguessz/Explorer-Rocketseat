export class GithubUsers{
    static async searchUser(user){
        
        const endpoint = `https://api.github.com/users/${user}`

        //Um await para aguardar a promise do fetch e outra para aguardar a informação ser tornada um json
        const {login, name, public_repos, followers} = await (await fetch(endpoint)).json()
        
        return {login , name , public_repos, followers}
    }
} 