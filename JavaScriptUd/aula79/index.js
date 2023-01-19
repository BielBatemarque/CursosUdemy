//aula sobre Promise
//promises -> Promsesas

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min ) + min);
}
/*Solução com callback*/ 

// function esperaAi(msg, tempo, callback){
//     setTimeout(()=>{
//         console.log(msg);
//         if(callback){
//             callback();           
//         }
//     },tempo);
// }
// esperaAi('frase1', rand(1,3), () =>{
//     esperaAi('frase2', rand(1,3), () => {
//         esperaAi('frase3', rand(1,3));
//     });
// });

/* Solução com Promise */
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(typeof msg != 'string'){
                reject(new Error('Error'));
            }
            resolve(msg);
        },tempo);
    });//resolve codigo executou com sucesso então faz ele, e o reject 'deu erro no cod rejeita ele'
}

esperaAi('frase1', rand(1, 3)).then((resposta) => {
    console.log(resposta);
    return esperaAi(22222, rand(1, 3));
}).then((resposta) => {
    console.log(resposta);
    return esperaAi('frese3', rand(1,3));
}).then((resposta) => {
    console.log(resposta);
}).then(()=>{
    console.log('eu serei o ultimo a ser exibido')
})
.catch((e)=>{
    console.log('erro: ', e);
});

console.log('isso será exibido antes de qualquer uma das promises');
//promisses são em paralelo chamado de código asincrono