//exercicio sobre for's e DOM
var par = document.querySelector('#container');
var ps = par.querySelectorAll('p');
// console.log(ps[1])
// for(var p of ps){
//     console.log(p)
// }
var estilos = getComputedStyle(document.body);//função para pegar estilos do body
var backg = estilos.backgroundColor;
console.log(backg);

for(var i in ps){
    ps[i].style.backgroundColor = backg;
    ps[i].style.color = 'white';
}