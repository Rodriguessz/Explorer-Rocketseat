
import './modules/button.js'






// Calculate the IMC
export default function imcCalc(altura, peso){

    const weight = peso
    const height = altura

    const calc = weight / (height/100) ** 2

    
    return calc.toFixed(2)

    
}
















