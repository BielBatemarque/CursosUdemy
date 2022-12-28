//aula sobre recuce
//reduzir um array a um unico elemento
//caso não passe o acumulador ele equivale ao primeiro elemento do array
// e o valor passa a ser o segundo elemento do array

var numeros = [5,50,80,1,2,3,4,5,6,7,11,15,22,27];
var total = numeros.reduce(function(acumulador, valor,indice, array){
    
    return acumulador += valor;
},0);//valor inicial do acumulador
    console.log(total);

 var pares = numeros.reduce(function (acumulador,valor,indice,array){
        if(valor%2 == 0){
            acumulador.push(valor);
        }
        return acumulador;
 },[]) ;  
 console.log(pares);

 var dobro = numeros.reduce(function(acumulador,valor,){
    acumulador.push(valor*2);
    return acumulador; 
 },[]);
 console.log(dobro);


 var pessoas = [
    {nome: 'luiz', idade:62},
    {nome: 'Maria', idade:23},
    {nome: 'eduardo', idade:55},
    {nome: 'leticia', idade:10},
    {nome:  'rosana', idade:64},
    {nome: 'wallace', idade:63}
 ];

 var maisVelha = pessoas.reduce(function(acumulador,valor,indice,array){
    if(acumulador.idade > valor.idade){
        return acumulador.nome;
    }      
    return valor;
 });
 console.log(maisVelha);