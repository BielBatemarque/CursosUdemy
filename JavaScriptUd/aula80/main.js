//aula sobre métodos uteis para promises

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string'){
            reject('cai no erro');
            return;
        } 
        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' - Passei na Promise');
            return;
        }, tempo);
    });
}

//Promise.all, Promise.race Promise.resolve, promise.reject

//const promises = ['primeiro valor', esperaAi('promise1', 3000), esperaAi('promise2', 500), esperaAi('promise3', 1000), /*esperaAi(1000, 1000)*/, 'outro valor'];
// Promise.all(promises).then(function(valor){
//     console.log(valor);
// }).catch(function(erro){
//     console.log(erro);
// });
//Promise.all() => resolve todas
// Promise.race(promises).then(function(valor){
//     console.log(valor);
// }).catch(function(erro){
//     console.log(erro);
// });
//Promise.race() => entrega a primeira que resolver; o primeiro valor

// function baixaPagina(){
//     const emCache = true;

//     if(emCache){
//         return Promise.resolve('pagina em cache');
//     }else{
//         return esperaAi('baixe a pagina', 3000);
//     }
// }
//Promise.resolve => quando a promise ja será resolvida e o reject quando já será rejeitada, servem para entregar uma promisa resolvida ou rejeitada logo de uma vez
baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => {console.log(e)})

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('pagina em cache');
    }else{
        return esperaAi('baixe a pagina', 3000);
    }
}
