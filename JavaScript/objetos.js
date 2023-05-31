// Objetos 

// Como criar um objeto no JavaScript?

let pessoa = {
    nome: 'Felipe',
    idade: 26,
}

console.log(pessoa)

console.log(pessoa.nome)

console.log(pessoa['idade'])// Forma alternativa

// Como adcionar um par chave-valor?

pessoa.altura = 1.77

console.log(pessoa)

// Como remover um par chave-valor?

delete pessoa.altura 

console.log(pessoa)

console.clear()

// Como percorrer?

for (let chave in pessoa) {
    console.log(chave)
}