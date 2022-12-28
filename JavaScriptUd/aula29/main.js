// // aula sobre atribuição por desestruturação (arrays)
// var numeros = [12, 20, 3, 4, 5, 6, 7, 8, 9];

// var [primeiro, segundo,terceiro, ...resto] = numeros;

// tres pontos é o operador rest usado para pegar o resto de objetos e arrays
//...restOperator       ...spradOperator
// console.log(primeiro, segundo,terceiro);
// console.log(resto);

var arrays = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
var [,[,,seis]] =arrays
var [lista1, lista2, lista3] = arrays;
console.log(arrays[1][2]);
console.log(seis);
console.log(lista1,lista2,lista3);