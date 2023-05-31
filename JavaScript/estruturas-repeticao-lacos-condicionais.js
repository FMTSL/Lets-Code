// Laços Condicionais
//Repete até a condição for verdadeira 

const input = require('readline-sync')

const numero_sorteado = 5;


let numero =  Number( input.question('Qual número você escolhe? '))

console.log(numero, typeof numero)

 while (numero !== numero_sorteado){
    console.log('Você errou. Tente novamente...')

    numero = Number (input.question('Qual numero voce escolhe?'))
 }
console.log ('VocÊ acertou!')