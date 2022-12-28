// filter + map + reduce
/*
pregar os numeros pares
dobrar os valores
reduzir(somar tudo)
*/ 
var numeros = [5,50,80,1,2,3,4,5,6,7,11,22,27];

var pares = numeros.filter((valor)=> {
   return valor%2 == 0;
}).map((valor)=>{
   return valor*2;
}).reduce((acumulador,valor)=>{
    return acumulador += valor;
});
console.log(pares);
