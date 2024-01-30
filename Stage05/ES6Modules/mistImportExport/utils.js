/*Import e Export Misto - Podemos utilizar um default Export/Import e um (ou mais)
named Export/Import
*/

const greeting = (name) => {
    return console.log(`Hello, ${name}!`) 
}

const defaultFunction = (agurment, date)=>{
   return console.log(date, greeting(agurment))
}

const date = new Date()



export default defaultFunction;
export {greeting, date};




