/*
06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const simples = (capital, juros, tempo) => {
    // Juros = Capital * taxa * tempo
    let jurosSimples = (capital * juros * tempo) + capital
    return jurosSimples
}

const composto = (capital, juros, tempo) => {
    //  M = C.(1+i)^t       M = C + J
    let jurosCompostos = capital * Math.pow((1 + juros), tempo)
    return jurosCompostos.toFixed(2)
}


console.log(simples(100, 0.10, 5))
console.log(composto(100, 0.10, 5))