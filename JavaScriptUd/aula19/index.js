// aula sobre valores primitivos e valores por referencia

/*primitivos
(imútaveis) - string, number, boolean, undefined, null

Referencia (mutaveis) - array, object, function
*/

var nome = 'Gabriel';
nome = 'rafael';
console.log(nome[0]);

let a = 'a';
let b = 'a'; //cópia
console.log(a,b);

const c1 = [1,2,3,4];

c1.push(5);
console.log(c1);

c1.pop(); // função pop remove o item
console.log(c1);