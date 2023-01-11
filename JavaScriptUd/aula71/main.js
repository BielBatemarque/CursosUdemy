//aula sobre polimorfismo
//metodos se comportando de forma diferente


//superclass
function Conta(agencia, conta, saldo){
    this.conta = conta;
    this.agencia = agencia;
    this.saldo = saldo;

}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log('saldo insuficiente');
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
   console.log(
    `ag/c: ${this.agencia}/${this.conta} |` + 
    `Saldo: ${this.saldo.toFixed(2)}`
   );
}

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype); // link dos prototypes
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if(valor > this.saldo + this.limite){
        console.log('saldo insuficiente');
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype); // link dos prototypes
CP.prototype.constructor = CP;


const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(90);
cc.sacar(20);
cc.sacar(10)

console.log();

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);
