/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function conta(a, b) {
    let soma = a + b
    sub = a - b
    mult = a * b
    div = a / b
    return [soma, sub, mult, div]
}

console.log(`Soma = ${conta(5, 2)[0]} | Subtração = ${conta(5, 2)[1]} | Multiplicação = ${conta(5, 2)[2]} | Divisão = ${conta(5, 2)[3]}`)
// console.log(soma)


// function conta(a, b) {
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a * b)
//     console.log( a / b)
    
// }

// console.log(conta(5, 2))