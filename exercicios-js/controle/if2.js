function teste1 (num){
    if(num > 7)
        console.log(num) // quando eu não coloco o bloco {}, o if entende a primeira sentença
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ;, não usar com as estruturas de controle
        
    }
}

teste2(6)
teste2(8)