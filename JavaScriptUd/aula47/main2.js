// function duplica(n){
//     return n*2;
// }
// function triplica(n){
//     return n*3;
// }
// function quadruplica(n){
//     return n*4;
// }
// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadruplica(2));

function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n){
        return n*multiplicador
    };
}
var duplica = criaMultiplicador(2);
var triplica = criaMultiplicador(3);
var quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));

