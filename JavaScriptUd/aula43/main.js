// aula sobre setInterval e setTimeout

function mostraHora(){
    var data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

var timer = setInterval(function (){// executa em um determinado intervalo de tempo
    console.log(mostraHora());
}, 1000);

setTimeout(function(){ // executa uma vez de acordo com o tempo definido
    clearInterval(timer);
}, 5000);

setTimeout(function(){
    console.log('olá mundo');
}, 7000);