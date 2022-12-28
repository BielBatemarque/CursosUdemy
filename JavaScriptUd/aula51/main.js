//aula sobre funções imediatas(IIFE -> immediately invoked function expression) 
// função que protege do escolpo global e dispara automaticamente
(function(idade, peso, altura){
    var nome = 'qualquer coisa'
    console.log(123345, nome); //nada dentro dessa função toca o escolpo global
        var sobrenome = 'santos';
    function falaOi(name){
        return name + ' ' + sobrenome
    }
    function falaNome(){
        console.log(falaOi('gabriel'));
    }
    falaNome();
    console.log(idade,peso,altura);
})(19,66,1.81);

var nome = 'gabriel';

/*
function(){
//estrutura
}();
*/ 