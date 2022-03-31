// middleware pattern (chain of responsability)
/* */

/*
[1]Criei uma função dentro de uma variável, o que me parece ser o padrão do javascript,
uma vez que o arrow funtion obriga que seja assim. Os dois Parâmetros criados é 
marromenos normal do padrão middleware.

[2]Pressupõe que o primeiro parâmetro, necessariamente, tem que ser um objeto.
Como um objeto pode ser criado dinâmicamente, se eu pedir para ver o "ctx",
eu estarei vendo os pares chave e valor da forma que atribuí nas funções.

[3]next() - este, por sua vez, obrigatoriamente tem que ser uma função.
Então é uma função dentro de outra função. É o famoso, e fi duma rapariga,
callback. Ainda vai ser explicado exatamente qual será a ação desta função.
*/
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1' // [2]
    next() // [3]
}

/* 
Abaixo repetem exatamente os passos 1, 2 e 3 acima.
*/
const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

/*
Abaixo repete QUASE a mesma coisa acima. A exceção é somente no item [3]. O Next()
foi reprimido/ omitido de propósito pois no final da cadeia ele perde seu sentido.
*/
const passo3 = ctx => ctx.valor3 = 'mid3'

/*
Agora é necessário criar uma função para executar todas as outras funcões criadas
anteriormente. 

[4] Esta função recebe dois parâmetros:
o "ctx", de novo, pressupõe-se que é um objeto da mesma forma que foi criado
em todas as funções anteriores. 
Um detalhe que o retorno da minha função é exclusivamente esse objeto "ctx". Sempre ele.
Todas as funções tem como propósito "alimentar" o meu objeto "ctx".

o "...middlewares" é um tipo de padrão que o filho da puta nunca explicou,
aí a gente tem que ter bola de cristal. Ele chamou de "PADRÃO REST"
(não sei se é assim que se escreve). Neste caso, neste padrão, eu vou colocar
uma serie de valores e estes serão "acoplados" em uma lista. Neste caso mais 
especificamente, eu colocarei funções numa lista. São as funções criadas anteriormente.

[5] Foi criado outra função dentro da função "exec()"[4]. Ela tem um único parâmetro
de "indice". Me parece que seu propósito é navegar pela lista invocada pelo parâmetro.

[6] Aqui tem uma lógica bem escrotinha. 
Depois de ver o vídeo 60 vezes e reler o arquivo outras 60 vezes eu ACHO que entendi a lógica.
Me parece que é um IF.
Se "middlewares && indice < middlewares.length" for verdadeiro, ou seja,
as duas operações lógicas são verdadeiras,
Então, execute isso "middlewares[indice](ctx, () => execPasso(indice + 1))"

[7] Uma atenção especial a esta linha.
A expressão "middlewares[indice](ctx, () => execPasso(indice + 1))" me retorna
uma das função criadas anteriormente, pois elas foram declaradas como parâmetros
desta funcão exec. 
A função "() => execPasso(indice + 1)" é minnha função next(), o que neste caso
a execPasso() está sendo passada como parâmetro.

Definitivamente eu não conseguiria transcrever essa lógica sozinho. Me sinto um burro.

[8] Dentro da função exec() eu instancio/ declaro a função execPasso() para que
eu tenha um índice para inicializar.
*/
const exec = (ctx, ...middlewares) => { // [4]
    const execPasso = indice => { // [5]
        middlewares && indice < middlewares.length && // [6]
            middlewares[indice](ctx, () => execPasso(indice + 1)) //[7]
    }
    execPasso(0)//[8]
}

/*
[9] Nesta linha eu inicializo o objeto "ctx", objeto este utilizado como parâmetro
em todas as funções, contudo, não existia antes.
*/
const ctx = {} // [9]

/*
[10] Eu estou inicializando, finalmente, a função exec(), esta função 
definitivamente é o padrão middleware - Executando os passos organizadamente e 
independentes.
 */
exec(ctx, passo1, passo2, passo3) //[10]
console.log(ctx)