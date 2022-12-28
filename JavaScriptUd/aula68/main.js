//aula sobre prototypes
//protótipos é o termo usado para se referir ao que foi criado pela primeira vez, sevindo de modelo ou molde para futuras produções
/*
todos os objetos tem uma referencia interna para um prototipo (_proto_) que vem da propiedade prototype da função construtora que foi usada
para cria-lo. quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no protótipo objeto e depois
a cadeia de protótipos é usada até o topo (null) até encontrar(ou não) tal membro.
*/
//prototype é um objeto que já está atrelado a função construtora
//é como se utilizasse um protótipo
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => {
        return 'original' + this.nome + ' ' + this.sobrenome};
}
Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
},
Pessoa.prototype.estouAqui = 'hahahahah'
var p1 = new Pessoa('luiz', 'a');
var p2 = new Pessoa('maria', 'lucia');
var data = new Date();
console.log(Pessoa.prototype);
console.log(Date.prototype)//ver no navegador
console.log(p1.nomeCompleto())