const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

imprimir('Chubilas', 10)

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))