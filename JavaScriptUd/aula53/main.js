// aula sobere função construtora constructor function
//retorna objetos
// sempre iniciar o nome com letra maiuscula -> Pessoa( new ), não necessita das ',' datação normal com';'

function Pessoa(nome, sobrenome){
    var id = 123123;
    //atributos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ' METODO ')
    }
}

var p1 = new Pessoa('gabriel', 'santos');

console.log(p1.nome);
//new -> cria um novo obj vazio, faz o this apontar para o obj vazia e retorna
