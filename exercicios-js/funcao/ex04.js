/*
04) ​ Crie uma função que irá receber dois valores, o dividendo e o divisor.
 A função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/

const divisao = (a, b) => {
    let div = a / b
    let resto = a % b
    return [div, resto]
}

console.log(`O resultado da divisião é ${divisao(10, 2)[0]} e o resto da divisão é ${divisao(10, 2)[1]}`)