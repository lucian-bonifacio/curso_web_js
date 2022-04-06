const http = require('http')

const url = `http://files.cod3r.com.br/curso-js/turmaA.json`

function res (res) {
    let resultado = ''

    res.on('data', dados => {
        // console.log(dados)
        resultado += dados
        // console.log(resultado)
    })

    res.on('end', () => {
        callback(JSON.parse(resultado))
    })
}  

http.get(url, res)

