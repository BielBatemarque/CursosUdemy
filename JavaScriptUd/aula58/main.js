//aula sobre concatenação de arrays
/*--------------forma1------------------------------------*/ 
var num1 = [1,2,3];
var num2 = [4,5,6];
var num3 = num1.concat(num2, [7,8,9], 'luiz'); //concatena vetores
console.log(num3)

/*--------------forma2--------------------------------------*/
//... restOperator -> pegar o resto ou ...spread

var a = [...num1,...num2, ...[7,8,9]];
console.log(a);