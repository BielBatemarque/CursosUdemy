// Escreva uma função que leia dois numeros e retorne o maior deles

var n1 = 3;
var n2 = 1;

function maior(a, b){
    if(a>b){
        return a;
    }else{
        return b;
    }
    // return a > b ? a : b;
}
// var max = (a,b) => a > b ? a : b;
var mm = maior(n1,n2);
console.log(mm);