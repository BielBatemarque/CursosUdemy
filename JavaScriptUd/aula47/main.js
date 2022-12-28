// aula bore return (funções avançadas)

function soma(a,b){
    return a + b;
}
console.log(soma(3,5));

function soma2(a,b){
    console.log(a+b);
}
soma2(5,2);

function criaPessoa(nome,sobrenome){
    return{
        nome: nome,
        sobrenome:sobrenome
    };
}
var pessoa1 = criaPessoa('gabriel', 'santos');
console.log(pessoa1);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

var olaMundo = falaFrase('olá');
console.log(olaMundo('mundo!'));