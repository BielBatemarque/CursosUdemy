var btn = window.document.getElementById('btn1');
    btn.addEventListener('click', clickou);
    function IMC(n1, n2){
        return n1/(n2*n2)
    }

    function clickou(){
var peso = window.document.getElementById('peso');
var altura = window.document.getElementById('altura');
var res = window.document.getElementById('res');
        var peso1 = Number(peso.value);
        var altura1 = Number(altura.value);
       var imcc = IMC(peso1,altura1);
        if(imcc<18.5){
          var cond = 'abaixo do peso';  
        }else{
            if(imcc>=18.5 && imcc<=24.9){
                cond = 'peso normal'
            }else{
                if(imcc>=25 && imcc<=29.9){
                    cond = 'sobrepeso'
                }else{
                    if(imcc >= 30 && imcc<= 34.9){
                        cond = 'obesidade grau 1'
                    }else{
                        if(imcc>=35 && imcc<=39.9){
                            cond = 'obesidade grau 2'
                        }else{
                            cond = 'obesidade grau 3'
                        }
                    }
                }
            }
        }
          res.innerHTML = `o imc é ${imcc} e você esta ${cond}`;
    }