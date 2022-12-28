// aula sobre for of
// ---------->for clássico <--------------
// var nome = 'gabriel Santos';
// for(var i = 0; i<nome.length; i++){
//     console.log(nome[i]);
// }//arrays e strings
// ----------->for in<--------------------
// for(var i in nome){
//     console.log(nome[i]);
// }//arrays strings e objetos
//----------->for of<---------------------
var nome = 'gabriel santps'
var nomes = ['gabriel','santos','batemarque'];
for(var i of nome){//exibe o valor direto
    console.log(i);
}//for of não funciona com objetos só funciona com objetos iteraveis(arrays e strings)
for(var i of nomes){
    console.log(i);
}
// forEach 
    nomes.forEach(function(valor, indice, array){
        console.log(valor, indice, array);
    })