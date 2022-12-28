// aula sobre funções recursivas
// função que faz meio um "loop" chamando a si propria
 function recursiva(max){
    if(max >=500 ){
        return;
    }
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(0);