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
    Produto.call(this, nome,preco);// fazendo ligação com as propiedades de Produto
    this.cor = cor;
};

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;// setando o construtor como camiseta novamente
//Camiseta.prototype = Object.create(Produto.prototype);

Camiseta.prototype.aumento = function(perc){
    this.preco = this.preco + (this.preco * (perc/100));
};

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function (valor){
            if(typeof valor != 'number'){
                return;
            }
            estoque = valor;
        }
     });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const prod = new Produto('gen',7.50);
const p1 = new Camiseta('regata', 7.5, 'preta');
const p2 = new Caneca('can1', 12.50, 'louça', '12');

p1.aumento(10);
console.log(p1);
console.log(prod);
console.log(p2);
console.log(p2.estoque);