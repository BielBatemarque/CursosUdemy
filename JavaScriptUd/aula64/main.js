// aula sobre objetos (avançados)
// obj podem conter metodos (funções), para ter acesso as coisas do obj dentro da função

var pessoa ={
    nome: 'gabriel',
    sobrenome: 'santos'
};
var chave = 'nome'
console.log(pessoa.nome);
console.log(pessoa['sobrenome']);

var pessoa1 = new Object();
pessoa1.nome = 'gabriel';
pessoa1.sobrenome = 'santos';

delete pessoa1.nome;
console.log(pessoa1);

var pessoa2 = {
    nome:'marcos',
    sobrenome:'miranda',
    idade:30,
    falaNome: function(){
       return (`${this.nome} está falando seu nome`);
    },
    getNascimento: function(){
        var dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    },
};
pessoa2.falaNome();
console.log(pessoa2.getNascimento());
    for( var chave in pessoa2){
        console.log(chave);
    }
