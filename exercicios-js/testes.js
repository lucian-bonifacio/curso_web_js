const objeto = {}
const objeto2 = {}

objeto.nome = 'chocolate'
objeto.preco = 1.00
objeto.id = 1

objeto2[objeto.id] = objeto
console.log(objeto)

console.log(objeto2)

function getProduto(id) {
    return objeto2[id] || {}
}

console.log(getProduto(1))