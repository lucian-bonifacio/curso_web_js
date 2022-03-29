const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // Acrescenta um elemento no primeiro índice da lista
console.log(pilotos)

// splice - adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// splice - remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // do 1 até o "4"
console.log(algunsPilotos2)