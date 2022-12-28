//aula sobre while e do While
//geralmente utilizado para quando não se sabe o valor limite
// var i = 0;
// while(i<=10){
//     console.log(i)
//     i++;
// }
//função para gerar numero aleátorio
function random(min, max){
    var r = Math.random() * (max-min) + min;
    return Math.floor(r);
}
    var min = 1;
    var max = 50;
    let rand = random(1,50);
    console.log(rand)
    while(rand != 10){
        rand = random(min, max);
        console.log(rand);
    }
// faz e depois checa a condição
//executa uma vez sempre
    do{
        rand = random(min, max);
        console.log(rand);
    }while(rand !=10);