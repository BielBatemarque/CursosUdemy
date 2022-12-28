//(arrays avançados) map -> mapeando arrays
//map altera os valores do array, mantem o mesmo tamanho do array original
//retorna novo array
//recebe os mesmo parametros padrois do filter: valor, indice e array
//dobrar os numeros
var numeros = [5,50,80,1,2,3,4,5,6,7,8,11,15,22,27];
var dobro = numeros.map(function(valor,indice,array){
    return valor * 2;
});
console.log(dobro);

var pessoas = [
    {nome: 'luiz', idade:66},
    {nome: 'maria', idade:23},
    {nome: 'eduardo', idade:55},
    {nome: 'leticia', idade:19},
    {nome: 'rosana', idade:32},
    {nome: 'wallace', idade:47}
]

var nomesDasPessoas = pessoas.map((valor)=>{
    return valor.nome;
});
console.log(nomesDasPessoas);

var idadeDasPessoas = pessoas.map((valor)=>{
    // return valor.idade;
    return {idade: valor.idade}
});
console.log(idadeDasPessoas);
// adicionando um campo "id" nos itens do objeto
var comId = pessoas.map(function(valor,indice){
    var newOBj = {...valor}
    newOBj.id = indice;
    return newOBj;
});
console.log(comId);
