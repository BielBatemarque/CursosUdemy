//aula sobre herança em classes

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
          console.log( this.nome + 'dispositivo já ligado');
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log( this.nome + 'dispositivo já desligado');
              return;
          }
          this.ligado = false;
      }
    
}

// var d1 = new DispositivoEletronico('smartphone');
// d1.ligar();
// d1.ligar();
// d1.desligar();
// d1.desligar();
// console.log(d1);

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);//chama o consitrutor da classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
}//dessa forma uma classe herda da outra
    class tablet extends DispositivoEletronico{
        constructor(nome, temWifi){
            super(nome);
            this.temWifi = temWifi;
        }
        ligar(){
            console.log('voce alterou o metodo ligar');
        }
    }
var n1 = new Smartphone('apple', 'iphone', 'iphone11');
console.log(n1);

var t1 = new tablet('Ipad', true);
console.log(t1.ligado);