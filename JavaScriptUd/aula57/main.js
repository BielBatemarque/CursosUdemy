//arrays avançados função splice
//faz a função de colocar, e tirar elementos no array o mesmo que pop e push shift e unshift
//                -5      -4       -3      -2         -1
//                0        1        2       3          4
const nomes = ['joão',',maria','eduardo','gabriel','julia']
//nomes.splice(indice de comecço, quant delete, elemento1, elemento2, elemento3...);

//nomes.splice(4, 1);//removeu o ultimo mesma função do pop()
// nomes.splice(3,0,'luiz')//adicionou 'luiz' no indice 3
// const removidos = nomes.splice(3, 2);

//shift
// const removidos = nomes.splice(0,1);//remove o primeiro indice
nomes.splice(nomes.length,0,'luiz');
console.log(nomes)
// //push
// nomes.splice(nomes.length,0,'luiz');
// console.log(nomes)

//unshift
nomes.splice(0,0,'luiz');
console.log(nomes)