// Aula sobre Objetos

var pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Batemarque',
    idade: 19,
    
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oii, minha ${this.idade} atual é...`);
    },
    incrimentaIdade(){
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrimentaIdade();
pessoa1.fala();
//     função para criar objetos
// function criaPessoa(nome, sobrenome, idade){
//     return{
//         nome:nome,
//         sobrenome: sobrenome,
//         idade: idade,
//     }
// }
// var pessoa2 = criaPessoa('Antonio', 'Batemarque', 50);
// console.log(pessoa2);



// console.log(pessoa1.nome);