//aula sobre atrubuição via desestruturação (objects)

var pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Santos',
    idade:19,
    endereco: {
        rua:'Anfiloqiuo nunes pires',
        numero: 304
    }
};
//var nome = pessoa.nome;// atribuição normal
//via desestruturação
var { nome, sobrenome } = pessoa1;
var { endereco: {rua, numero}} = pessoa1;
var {nome, ...resto} = pessoa1;
console.log(nome, sobrenome);
console.log(rua, numero);
console.log(nome, resto);