//aula sobre Object.defineProperty() e Object.defineProperties()
// utilizados para "travar"algumas chaves do objeto

//define property - defineProperties -> singular e plural

function Produto(nome,preco,estoque){
    this.nome = nome;   //com o this são variaveis publicas
    this.preco = preco;

     Object.defineProperty(this, 'estoque',{
        enumerable : true,//mostra a chave
        value:estoque,  // valor da chave
        writable:false, //pode alterar ou não pode ser alterado
        configurable: true //pode reconfigurar a chave// configuravel;
     });
}

var p1 = new Produto('camiseta', 20,3);
console.log(Object.keys(p1));

for (var i in p1){
    console.log(i)
}