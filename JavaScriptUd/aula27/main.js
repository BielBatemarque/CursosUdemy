// aula sobre objeto date

// var tresHoras = 60 * 60 * 3 *1000;
// var data = new Date(); //uma função contrutora por isso o 'D'


// var data = new Date(2019, 3, 20, 15, 14, 60, 500); //o js corrige valores tipo se colocar 60s ele tranasforma 1min
// // no js os meses começam do zero janeiro ->0 fevereiro ->1 ...
//     console.log(data.toString());

// var data = new Date('2019-04-20 20:20:59');
//     console.log('dia', data.getDate());
//     console.log('mes', data.getMonth()); //mes começa do zero
//     console.log('ano', data.getFullYear());
//     console.log('hora', data.getHours());
//     console.log('minutos', data.getMinutes());
//     console.log('dia semana', data.getDay()); // 0 é domingo e 6 é sabado
//     console.log(data.toString());

function zeroEsquerda(num){
    return num>=10 ? num : `0${num}`
}

function formataData(data){
    var dia = zeroEsquerda(data.getDate());
    var mes = zeroEsquerda(data.getMonth() +1) ;
    var ano = zeroEsquerda(data.getFullYear());
    var hora = zeroEsquerda(data.getHours());
    var min = zeroEsquerda(data.getMinutes());
    var seg = zeroEsquerda(data.getSeconds());

        return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}

    const data = new Date();
    var databr = formataData(data);
    console.log(databr);
