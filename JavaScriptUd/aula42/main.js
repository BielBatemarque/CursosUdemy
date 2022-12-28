// aula sobre: continuação sobre a aula de tratamento de erros

// try{
// //executada quando não há erros
// //console.log(a);
// console.log('abri um aquivo');
// console.log('manipulei o arquivo e gerou erro');
// console.log('fechei o arquivo');
// }catch(err){
// //executado quando há erros
// console.log('tratando o erro');
// }finally{
//     //sempre
//     console.log('Finally: sempre é executado')
// }
function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('esperando instância de Date');
    }   
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    });
}
try{
    var data = new Date('01-01-1970 12:58:12');
    var hora = retornaHora(11);
    console.log(hora);
}catch(err){
console.log(err)
}
finally{
    console.log('tenha um bom dia');
}