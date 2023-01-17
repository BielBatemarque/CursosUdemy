class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
       const camposValidos =  this.camposSaoValidos();
       const senhasValidas = this.senhasSaoValidas();

       if(camposValidos && senhasValidas){
            window.alert('formulário enviado');
            this.formulario.submit();
       }
    }

    senhasSaoValidas(){
        var valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetirsenha')

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'campo senha e repetir senha tem que ser iguais')
        }

        if(senha.value.length <6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'o campo senha precisa ter entre 6 e 12 digitos')
        }

        return valid;
    }

    camposSaoValidos(){
        var valid = true;
        for(var errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
        for(var campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
           // console.log(campo);
           if(!campo.value){
                this.criaErro(campo, `O campo '${label}' não pode estar em branco`);
                valid = false;
           }
           if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)){
                    valid = false;
                }
           }
           if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)){
                     valid = false;
             }
           }
        }
        return valid;
    }
    validaUsuario(campo){
     const usuario = campo.value;
     var valid = true;

     if(usuario.length > 12 || usuario.length < 3){
        this.criaErro(campo, 'usuário não corresponde as regras');
        valid = false;
     }
     if(!usuario.match(/[a-zA-Z0-9]/g)){
        this.criaErro(campo, 'usuário precisa conter apenas letras ou numeros');
        valid = false;
     }

        return valid;
    }
    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()){
            this.criaErro(campo, 'cpf invalido');
        }
        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
        
    }
}
const valida = new ValidaFormulario();