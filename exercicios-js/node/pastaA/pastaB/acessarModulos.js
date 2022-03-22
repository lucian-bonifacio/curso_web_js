let moduloA = require('../../moduloA')
console.log(moduloA.ola)

moduloA = require('/home/lucian/Documentos/curso_web_js/exercicios-js/node/moduloA.js')
console.log(moduloA.ola)

let c = require('./pastaC/index.js')
console.log(c.ola2)

c = require('./pastaC') // padrão index
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)