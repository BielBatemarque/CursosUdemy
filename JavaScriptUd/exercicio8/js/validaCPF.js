//cpf com classes

class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;


    }
    // pode ser estatico por não utiliza o this em lugar algun assim não consulta a instância
    static geraDigito(cpfSemDigitos){
        var total = 0;
        var reverso = cpfSemDigitos.length + 1;
        for(let i of cpfSemDigitos){
            total += reverso * Number(i);
            reverso--; 
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
        console.log(total);
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo != 'string') return false;
        if(this.cpfLimpo.length != 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf();
        console.log(this.novoCpf);

        return this.novoCpf === this.cpfLimpo;
    }
}

// let validacpf = new ValidaCPF('070.987.720-03');
// // validacpf = new ValidaCPF('999.999.999-99');

// if(validacpf.valida()){
//     console.log('cpf valido');
// }else{
//     console.log('cpf invalido');
// }