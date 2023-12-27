function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return  emailRegex.test(email)
    
}

function User(name , age , password , email, idUser){
    this.id = idUser
    this.name = name
    this.age = age,
    this.password = password
    this.email = email
}

const users = []

function detectError(name = "" , age,email, password ){
   
    

    const idUser = (Math.random() * 1000000).toFixed(0)

    if(name === "" ){
        throw new Error("Name cannot be empty")
    }

    if (!isValidEmail(email)){
       throw new Error("Your email is invalid!") 
    }

    if (typeof password != "string"){
        throw new Error("The inputed value on password must be a valid STRING")
    }

    if (typeof age != "number"){
        throw new Error("The inputed value must be a NUMBER")
    }
    if(age < 18){
        throw new Error("You must be 18 years old!")
    }

    if (idUser in users){
        throw newError("User already exists!")
    }

   


    const newPerson = new User(name, age , password , email, idUser)
    users.push(newPerson)
    console.warn("Usuário criado com sucesso")

    console.log(users)    
}




try{

    detectError("Enzo Rodrigues", 18, "enzo.orodrigues03gmail.com", "120943" )
      
    
}
catch(e){
    console.error(e.message)
}

console.log("Passou o try catch") //Mesmo se houver erros, o código seguirá com a execução

