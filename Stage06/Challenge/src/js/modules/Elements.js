class Elements {
    getElement(selector, identifier = false){

        // By class
        if(identifier == ".") {
            const element = document.querySelector(String(identifier + selector))
            return element
        }

        // By Id
        if(identifier == "#") {
            const element = document.querySelector(String(identifier + selector))
            return element
        }

        //By tag - Default
        if(!identifier){
            const element = document.querySelector(String(selector))
            return element
        } 
    }

    getAllElements(selector){
        const element = document.querySelectorAll(String(selector))
            return element
    }


}


export default Elements
