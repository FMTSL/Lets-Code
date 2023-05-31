// Funções

function saudacao () {
    console.log('Olá, me chamo Felipe. Seja bem-vindo(a) ao nosso curso de JavaScript!')
}

saudacao()

console.clear()

// Como enviar parâmetros para as funções?


function saudacao (nome) {
    console.log(nome)
    console.log(`Olá, ${nome}. Seja bem-vindo(a) ao nosso curso de JavaScript!`)
}

saudacao("Matos")

// Nome e curso
console.clear()

function saudacao (nome, curso) {
    console.log(`Olá, ${nome}. Seja bem-vindo(a) ao nosso curso de ${curso}!`)
}

saudacao("Matos", "HTML/CSS")

console.clear()

// Retorna Função

function soma (numero1, numero2){
    return numero1 + numero2
}

const resultado = soma(15,20)

console.log(resultado)

console.clear()

function maiorDoQue50(numero){
    if ( numero > 50){
        return true
    }

    return false
}
