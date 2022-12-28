//aula formas de declarar função inicio do estudo avançado de funções

//function hoisting
function falaOi(){
    console.log('oie');
}
falaOi();

// First class object(objetos de primeira classe)
//function expression
var nome = 'luiz';
var souUmDado = function (){
    console.log('sou um dado');
};
souUmDado();

function executaFunção(funcao){
    console.log('vou executar sua função abaixo');
    funcao(); //executa um parametro 
}
executaFunção(souUmDado);

//arrow function recurso do ES6 para cima

var arrow = () =>{
    console.log('sou uma arrow function');
}
arrow();
//dentro de um objeto

var obj ={
    falar: function(){
        console.log('estou falando')
    }
};
obj.falar();