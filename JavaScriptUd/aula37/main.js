//aula sobre break e continue
//continue -> pula para a proxima iteração do laço quando encontra a palavra continue
//break -> sai do bloco quando acha a palavra break(mesma coisa do switch case), dessa forma não verifica os demais termos
//funciona em todos os laços e repetições e demais coisas do Js
var numeros = [1,2,3,4,5,6,7,8,9];
for(let i of numeros){
    if(i == 2){// dessa forma vai pular o numero 2
        console.log('pulei o numero 2');
        continue;
    }

    if(i == 5){
        console.log('pulei o numero 5');
        continue;
    }
    console.log(i)
    console.log('7 encontrado saindo...')
    if(i == 7){
        break;
    }

  //  console.log(i)
}