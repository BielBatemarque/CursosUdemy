//aula sobre metodos de instancia e estático

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //metodo de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    //metodo estático -> metodo referente a classe, não se refere aos dados da instancia
   static trocaPilha(){
        console.log('ok vou trocar');
    }
}
const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
c1.aumentarVolume();
c1.diminuirVolume();
ControleRemoto.trocaPilha();
console.log(c1);