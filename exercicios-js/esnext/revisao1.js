// let e const

{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r' // criando várias variáveis através de um array.
console.log(l, e, tras)// ... operador rest

const [x, y] = [1, 2]
console.log(x, y)

const {idade: i, nome } = {nome: 'Ana', idade: 9}
console.log(i, nome)