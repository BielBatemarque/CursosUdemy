//aula sobre getter e setters
//maneira de proteger as propiedades
//get -> para obter o valor e e o set para settar

function Produto(nome,preco,estoque){
    this.nome = nome;   //com o this são variaveis publicas
    this.preco = preco;


        var estoquePrivado = estoque;
     Object.defineProperty(this, 'estoque',{
        enumerable : true,//mostra a chave
        configurable: true, //pode reconfigurar a chave// configuravel;
        get: function(){
            return estoque;
        },
        set : function(valor){
            if(typeof valor != 'number'){
                console.log('bad value');
                throw new TypeError('mensagem')
            }
            estoquePrivado = valor;
        }
     });
}

    function criaProduto(){
        return{
            get nome(){
                return nome;
            },
            set nome(valor){
                nome = valor;
                valor = valor.replace('coisa', '');
                nome = valor;
                // o set consegue interceptar os valores para trata-los
            }
        }
    }
var p2 = criaProduto('camiseta');
p2.nome = 'qualquer coisa';
console.log(p2.nome);
var p1 = new Produto('camiseta', 20,3);
p1.estoque = 500
console.log(p1);
console.log(p1.estoque);
