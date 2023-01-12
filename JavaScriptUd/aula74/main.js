//aula sobre classes

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} esta falando`);
        console.log(this);
    }

}

const p1 = new Pessoa('nome', 'sobrenome');
p1.falar();