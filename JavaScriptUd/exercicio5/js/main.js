//exercicio construir uma calculadora utilizando factory function
function criaCalculadora(){
    return{
        display: document.querySelector('#display'),
        btnClear : document.querySelector('.btn-clear'),
        
        clearDisplay(){
            this.display.value = '';
        },
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
            
        },
        pressionaEnter(){
            this.display.addEventListener('keypress', (e)=>{
                if(e.keyCode ==13){
                    this.realizaConta();
                }
            });
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta(){
          var conta = this.display.value;
          try{
        conta = eval(conta);//função eval pega a string e tenta processa-la como codigo js
        if(!conta){
            window.alert('conta invalida')
            return;
        }
        this.display.value = conta;
          } catch(e){
            alert('conta invalida');
            return;
          }
        },
        cliqueBotoes(){
            // this-> calculadora
            document.addEventListener('click', (e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            });//.bind(this));//bind seta manualamente a quem o 'this' se refere
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}
const calculadora = criaCalculadora();
calculadora.inicia();