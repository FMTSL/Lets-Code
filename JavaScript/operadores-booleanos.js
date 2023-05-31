// Operadores Booleanos 

// Igualdade == (ou ===)
// Desigualdade != (ou !==)
// Maior que: >
// Maior ou igual: >=
// Menor que: <
// Menor ou igual: <= 

const numero = 10

console.log(numero > 20)
console.log(numero == 10)

console.log(numero == 10)
console.log(10 == '10') // JavaScript apenas compara o conteudo, não fazendo distinção da variavel no caso
console.log(10 === '10') // JavaScript faz distinção da variavel e do conteúdo também

console.clear()//Limpar

console.log (10 != '10')
console.log (10 !=='10')

//Conjunções Lógicas

// And => &&

let idade = 26
let tenhoCNH = true

const possoDirigir = idade >=18 && tenhoCNH === true

console.log('Posso dirigir?', possoDirigir)

// Or =: ||

idade = 40

const votoFacultativo = idade < 18 || idade >= 70 

const gostoDoCurso = false

console.log(!gostoDoCurso)