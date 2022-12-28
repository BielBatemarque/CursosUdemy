function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;


}
//criando metodo para a função contrutura fora dela
Produto.prototype.desconto = function(prcentual){
    this.preco = this.preco - (this.preco * (prcentual / 100));
}
Produto.prototype.aumento = function(prcentual){
    this.preco = this.preco + (this.preco * (prcentual / 100));
}
//litral
var p2 = {
    nome:'caneca',
    preco:15,
};
Object.setPrototypeOf(p2, Produto.prototype);



var p1 = new Produto('camiseta',50);
// p1.desconto(100);
// p2.desconto(50);
// console.log(p1, p2);
var p3 = Object.create(Produto.prototype, {
    tamanho: {writable:true, configurable:true, enumerable: true, value: 42},
    tamanho2: {writable:true, configurable:true, enumerable: true, value: 42},
});
p3.preco = 115;
p3.aumento(10)
console.log(p3);