//aula sobre if else
// if(){} -> else{} -> else if(){}
var hora = 24;

if(hora<=12){
    console.log('bom dia');
}else{
    if(hora>12 && hora<18){
        console.log('boa tarde');
    }else if(hora>18 && hora<=23){
        console.log('boa noite');
    }else{
        console.log('deu erro');
    }
}
