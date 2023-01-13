//aula sobre get e set em Poo
const _velocidade = Symbol('velocidade');//criando variavel privada
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    set velocidade(valor){
        console.log('setter');
        if(typeof valor != 'number'){
            return;
        }
        if(valor >= 100 || valor <=0){
            return;
        }
        this[_velocidade] = valor;
    }
    get velocidade(){
        console.log('getter');
        return this[_velocidade];
    }// pega um elemento 'privado'

    acelerar(){
        if(this[_velocidade] >= 100){
            return;
        }
        this[_velocidade]++;
    }

    freiar(){
        if(this.velocidade <= 0){
            return;
        }
        this[_velocidade]--;
    }
}
const c1 = new Carro('fusca', 100);
// for (var i = 0; i<=200; i++){
//     c1.acelerar();
// }

c1.velocidade = 99;// aqui está o acionamento do setter pq está setando a velocidade
console.log(c1.velocidade);//aqui esta o ativamento do getter por que esta pegando o valor