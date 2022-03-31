const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    // Colocar alguma lógica que retorne true ou false
    return false
}))

const quinhentos = p => p.preco >= 500
const fraco = p => p.fragil === true

console.log(produtos.filter(quinhentos).filter(fraco))