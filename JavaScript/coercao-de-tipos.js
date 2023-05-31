// Coerção (Conversão) de Tipos

// - 1. Coerção explícita (Manual)
const numero = 10

console.log(numero, typeof numero)

// Converter number para string
const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('123456789'))
console.log(parseFloat('8910.11'))
console.log(parseInt('8910.11'))
console.log(Boolean(1)) // apenas 0 é falso 


// - 2. Coerção Implícita (Automática)

console.log('10' + 1)//Quando é soma, ele junta
console.log ('10' - 1)
console.log (10 * '3')
console.log (10 - 'aaaaaaaaa') // Retorna um Nan, sigla "Not a number"

