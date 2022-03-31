const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // o módulo me retorna uma função
const contadorD = require('./instanciaNova')() // o módulo me retorna uma função

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor , contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)