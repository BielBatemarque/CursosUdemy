//aula sobre herança
/*
Produto -> aumento, desconto
Camiseta = cor, caneca = material
*/
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};
function Camiseta(nome, preco, cor){
    Produto.call(this, nome,preco);
}
Camiseta.prototype = Object.create(Produto.prototype);
//Camiseta.prototype = Object.create(Produto.prototype);
const p1 = new Camiseta('regata', 7.5, 'preta');
p1.aumento(10);
console.log(p1);