//aula sobre parâmetros da função (módulo avançado)

// function funcao(a,b,c){
//     var soma = 0;
//    // console.log(arguments); // arguments -> 'variavel nativa do js que armazena argumentos armazenada somente na palavra function
//     for(var i of arguments){
//         soma += i; 
//     }
//     console.log(soma, a,b,c);
// }
// funcao( 1,2,3,4,5,6,7,8,9);
// function funcao(a,b,c,d,e,f,g){
//     console.log(a,b,c,d,e,f,g);
// }
// // funcao(1,2,3);
// function funcao(a,b = 0){ // caso não de um valor para b assumirá o valor 0
//     b = b || 0; // validação caso b não exista será igual a 0
//     console.log(a+b);
// }
// funcao(1);
// funcao(2,undefined);
// function funcao({nome,sobrenome,idade}){
//     console.log(nome,sobrenome,idade);
// }
// var obj = {
//     nome:'luiz',
//     sobrenome:'carlos',
//     idade:20
// }
// funcao(obj);

var conta =function conta(operador, acumulador, ...numeros){
    console.log(operador, acumulador,numeros);
    for(let numero of numeros){
       if(operador ==='+'){acumulador += numero;}
       if(operador ==='-'){acumulador -= numero;}
       if(operador ==='*'){acumulador *= numero;}
       if(operador ==='/'){acumulador /= numero;}
    }
    console.log(acumulador);
};
conta('+', 0, 20,30);