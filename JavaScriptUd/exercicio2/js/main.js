var data = new Date();
var diaM = data.getDate();
var diaSemana = data.getDay();
var diaST;
var mes1 = data.getMonth() + 1;
var ano = data.getFullYear();
var hora = data.getHours();
var minuto = data.getMinutes();
switch(diaSemana){
    case 0:
        diaST = 'domingo';
        break;
    case 1:
        diaST = 'segunda-feira';
        break;
    case 2:
        diaST = 'terça-feira';
        break;
    case 3:
        diaST = 'quarta-feira';
        break;
    case 4:
        diaST = 'quinta-feira';
        break;
    case 5:
        diaST = 'sexta-feira';
        break;                
    case 6:
       diaST = 'sabado-feira';
        break;
}
function RetMes(mes){
    var ms;
    switch (mes){
        case 1:
           return 'janeiro' 
        case 2:
            return 'fevereiro'
        case 3:
            return 'março'
        case 4:
            return 'abril'
        case 5:
            return 'maio';
        case 6:
            return 'junho';
        case 7:
            return 'julho';
        case 8:
            return 'agosto';
        case 9:
            return 'setembro';
        case 10:
            return 'outrubro';
        case 11:
            return 'novembro'
        case 12:
            return 'dezembro'                                       
        }
}
function zeroEsquerda(num){
    return num>=10 ? num : `0${num}`
}
var hora1 = zeroEsquerda(hora);
var min1 = zeroEsquerda(minuto);
var mestxt = RetMes(mes1);
console.log(diaST, mestxt, diaM);
var res = window.document.getElementById('res');
res.innerHTML = `${diaST}, ${diaM} de ${mestxt} de ${ano} <br> ${hora1}:${min1}`