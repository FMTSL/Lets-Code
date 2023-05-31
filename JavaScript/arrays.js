// Arrays

//Como criar um array?
 let arr = ['Felipe', 26, 1.75, true]

 console.log(arr)

 // Como acessar elementos array?

 console.log('Primeiro elemento', arr[0])

 // Como obter o tamanhho do array?
console.log('Tamanho do array:', arr.length)

console.clear()

// Percorrendo arrays
for (let i = 0; i < 4; i++){
    console.log(arr[i])
}

console.clear()

for (let elemento of arr){
    console.log(elemento)
}

console.clear()

for (let indice in arr){
    console.log(indice)
}