//aula sobre for in
// for in -> lê os índices ou chaves do objeto
//var frutas = ['Pera',',maçã','uva'];
//for( var i = 0; i<frutas.lenght; i++){console.log(i)}
// for( var i in frutas){
//     console.log(frutas[i]);
// }

var pessoa = {
    nome:'gabriel',
    sobrenome: 'santos',
    idade:19
};
console.log(pessoa.nome);
console.log(pessoa['nome']);

for (var i in pessoa){
    console.log(i, pessoa[i]);
}