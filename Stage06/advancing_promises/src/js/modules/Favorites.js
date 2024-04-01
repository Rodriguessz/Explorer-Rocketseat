export class Favorites{
    constructor(root){
        //Procura o elemento raiz do nosso projeto
        this.root = document.querySelector(root)
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
    }

    removeAllTr(){
        const tbody = this.root.querySelector("tbody")

        tbody.querySelectorAll("tr")
        .forEach(tr =>{
            tr.remove()
        })
    }
}