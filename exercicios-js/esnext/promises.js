function falarDepoisde(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisde(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))



function funcao (palavra) {
    return 'Palavra'
}

function teste (){
    return function funcao () {
        return 'Palavra'
    }
}

console.log(teste()())

