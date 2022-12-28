//funções geradoras
//yield é quase como se fosse um return
function* geradora1(){
//qualquer codigo ...
    yield 'valor1';
    //qual codigo 
    yield 'valor2'

}

const g1 = geradora1();
for(var valor of g1){
    console.log(valor);
}
// console.log(g1.next().value);
// console.log(g1.next().value);

function* gerador2(){
    var i = 0;
    while(true){
        yield i;
        i++;
    }
}
var g2 = gerador2();
console.log(g2.next().value);

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;

}

function* geradora5(){
    yield function(){
        console.log('vim do y1');
    }
    yield function(){
        console.log('vimdo y2');
    }

}
var g5 = geradora5();
var func1 = geradora5().next().value;
var func2 = geradora5().next().value;
func1();
func2();