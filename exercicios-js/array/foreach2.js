Array.prototype.forEach2 = function(callback){
    // em callback eu espero receber uma função
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})