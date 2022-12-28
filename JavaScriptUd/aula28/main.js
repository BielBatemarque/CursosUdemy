// aula sobre switch case

var data = new Date();
var dia = data.getDay();
var diaSemanaTexto;

switch (dia){
    case 0:
        diaSemanaTexto= 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'terça';
        break;
    case 3:
        diaSemanaTexto = 'quarta';
        break;
    case 4:
       diaSemanaTexto = 'quinta';
        break;
    case 5:
        diaSemanaTexto = 'sexta';
        break;
    case 6:
        diaSemanaTexto = 'sabado';
        break;  
    // default: //ultima verificação caso não entre em nenhuma
    //     diaSemanaTexto = '';                          
}  

console.log(diaSemanaTexto);