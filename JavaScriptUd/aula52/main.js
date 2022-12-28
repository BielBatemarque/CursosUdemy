// aula sobre factory function

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome:nome,
        sobrenome:sobrenome,
      get  nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

            //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },


        fala: function(assunto){
            return `${this.nome} está falando. ${assunto}.`//this sempre se refere a "quem chamou a função neste caso p1"
        },
        peso: peso,
        altura: altura,

        //getter usado para obter
        get imc(){
            var indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);// to fixed para ter apenas duas casas decimais
             
        }
    }
}

var p1 = criaPessoa('gabriel', 'santos');
var p2 = criaPessoa('maria', 'joaquina', 1.6, 55);
console.log(p1.fala('falando sobre JS'));
console.log(p2.fala('falando sobre Js'));
console.log(p2.imc);
console.log(p1.nomeCompleto);
