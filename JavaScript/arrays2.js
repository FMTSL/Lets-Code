// Arrays 2

// Fatiamento: slice

const arr1 = [30,12,45,34,29]
let arr2 = []

console.log(arr1.slice(0, 2))
console.log(arr1.slice(2))

console.clear()

// Adicionando elementos: push | unshifit

console.log('Antes de adicionar:', arr2)

arr2.push(10, 20, 30)
arr2.push(40)

console.log('Depois de adicionar', arr2)

console.clear()

// Removendo elementos: pop (ultimo) | shift (primero)
console.log('Antes de remover com o pop:', arr2)

const elementoRemovido = arr2.pop()

console.log('Depois de remover com o pop:', arr2)
console.log('O elemento removido foi', elementoRemovido)

console.clear()

// Concatenando  arrays: concat

console.log('arr1', arr1)
console.log('arr2', arr2)

arr1.concat(arr1.concat(arr2))
arr1.concat(arr2.concat(arr1))


//Buscando elemtno: indexOG | lastIndexOf
console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34)

console.log(indiceDoElemento34)
console.clear()

//Descobrindo a existência de um elemento: includes

console.log(arr1)

console.log(arr1.includes(12))

// Invertendo arrays: reverse

console.log('arr1 normal:', arr1)

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido:', arr1Invertido)