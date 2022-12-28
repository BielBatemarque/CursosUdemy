//aula sobre filter (conteudo de array avançado) -> sempre retorna um array com a mesma quantidade de elementos ou menos
//retornar os maiores que 10
const numeros = [5,50,80,1,2,3,4,5,6,7,8,11,15,22,27];
//vai filtrar o array
// function callbackFilter(valor, indice, array){
//     // if(valor >10 ){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
//     return valor > 10;
// }
var numeros2 = numeros.filter((valor) => { return valor >10});// função anonima dentro do filter
console.log(numeros2);




var pessoas = [
    {nome: 'luiz', idade:66},
    {nome: 'maria', idade:23},
    {nome: 'eduardo', idade:55},
    {nome: 'leticia', idade:19},
    {nome: 'rosana', idade:32},
    {nome: 'wallace', idade:47}
]

var pessoasComNomeGrande = pessoas.filter((valor)=>{
    console.log(valor);
    return valor.nome.length >= 5;
});

console.log(pessoasComNomeGrande);

var pessoasMaioresDe50Anos = pessoas.filter((valor)=>{
   return valor.idade > 50;
})
console.log(pessoasMaioresDe50Anos);

var pessoasCujoNomeTerminaComAletraA = pessoas.filter((valor)=>{
   return valor.nome.toLowerCase().endsWith('a');//lowerCase para deixar em minusculo e endsWith para ver a ultima letra
})
console.log(pessoasCujoNomeTerminaComAletraA);