//aula sobre factory functions + prototypes
//linkar com um arquivo html e ver no navegador
var falar = {
    falar(){
        console.log(`${this.nome} esta falando`);
    },
}

var comer = {
    comer(){
        console.log(`${this.nome} esta comendo`);
    },
}

var beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`);
    }
}

//const pessoaPrototype = { ...falar, ...comer, ...beber} copiando com sprad operator
const pessoaPrototype = Object.assign({}, falar, comer, beber);//

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}
const p1 = criaPessoa('gabriel', 'santos');
const p2 = criaPessoa('maria', 'seila');
console.log(p2);