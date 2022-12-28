// aula sobre closures
// closure -> é a habilidade da função de acessar o seu escolpo léxico("vizinhos")

function retornaFunao(nome){
    // var nome = 'gabriel';
    return function(){//funçãop anonima
        return nome;
    }
}

var funcao = retornaFunao('gabriel');
var funcao2 = retornaFunao('santos');

console.log(funcao);
console.log(funcao2);
console.log(funcao(),funcao2());