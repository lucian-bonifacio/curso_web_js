/*
[1] Toda a aplicação que precisa comunicar na rede, é necessário criar uma porta.
Cada processo que precisa comunicar com a rede, essa comunicação/ processo
é através de uma porta.
porta = processo
*/
const porta = 3003 // [1]

/*
[2] O express já foi instalado e encontra-se dentro da pasta node_modules.
Dentro da pasta express encontra-se o arquivo "index.js". Isso é importante
pois por padrão, ao realizar a importação com a sintaxi em destaque,
este é o primeiro arquivo a ser buscado.
*/
const express = require('express') // [2]



/*
[3] Neste caso eu estou INSTANCIANDO o express, ou seja, inicializando.
Estou realizando esse processo e atribuindo a variável "app".
através do app que vou colocar os meus serviços.
*/
const app = express() // [3]

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const bancoDeDados = require('./bancoDeDados')

/*
[4] o "get" é uma forma de requisição. Neste caso, é um atributo/ método de express().
Não explica o que é o primeiro parâmentro "'/produtos'". Creio que á uma caminho/ página/ rota.
O segundo parâmetro é uma função middleware, semelhante a aula anterior. Vamos entender melhor:
A aula anterior não explica absolutamente porra nenhuma do que está acontecendo aqui. kkk
Acho que o professor quis demonstrar o que acontece por "de baixo dos panos",
contudo, ficou uma super confusão.
É uma função com 3 parâmetros.
a função "res", então, é um objeto que possui o atributo/ método ".send".
Como parâmetro para o ".send()" foi passado um objeto, que no final será transformado
em JSON.
*/
app.get('/produtos', (req, res, next) => {
    res.send( bancoDeDados.getProdutos()) // [4]
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})
/*
[5] Este atributo/ método "listen()" recebede dois parâmetros:
o primeiro é a porta que será executado o processo.
O segundo é uma callback, que neste caso tem a única função de retornar um texto.
OBS: Sempre é uma função, mesmo que seja para uma simples ação.
*/
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`) // [5]
})