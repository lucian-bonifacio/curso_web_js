function soma(a, b) {
    return a + b
}

console.log(soma(1, 1))

let somaVariavel = soma
console.log(somaVariavel(1, 2))

let somaArrow = (a, b) => { 
    return a + b
}
console.log(somaArrow(2, 2))