// factory function
//constructor function

function ciraPessoa(nome, sobrenome){
    return{
        nome: nome,
        sobrenome : sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};
var p1 = ciraPessoa('gabriel','santos');
console.log(p1.nomeCompleto);
Object.freeze(p1);//travar o objeto

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);//trava qualquer um dos objetos que sairem da função
}
console.log(this);
//{} <- this 
var p2 = new Pessoa('gabriel', 'batemarque');
console.log(p2);