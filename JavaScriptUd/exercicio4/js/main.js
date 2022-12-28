var relogio = window.document.getElementById('relogio');
var btn1 = window.document.getElementById('btn1');
var btn2 = window.document.getElementById('btn2');
var btn3 = window.document.getElementById('btn3');
var segundos = 0;
var timer;
    function iniciaRelogio(){
         timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        },1000);
    }
    btn1.addEventListener('click', iniciar);
    btn2.addEventListener('click', pausar);
    btn3.addEventListener('click', zerar);
    
    function criaHoraDosSegundos(segundos){
        var data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        });
    }
    console.log(criaHoraDosSegundos(10));
    function iniciar(){
        clearInterval(timer);
        iniciaRelogio();
        relogio.classList.remove('pausado');
    }
    function pausar(){
        clearInterval(timer);
        relogio.className = 'pausado';
    }
    function zerar(){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausado');
    }