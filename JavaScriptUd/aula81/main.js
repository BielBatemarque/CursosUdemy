//aula sobre async e await

function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min ) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(typeof msg != 'string'){
                reject(new Error('Error'));
            }
            resolve(msg + ' - Passei na Promise');
        }, tempo);
    });
}

// esperaAi('fase1', rand()).then((valor) =>{
//     console.log(valor);
//     return esperaAi('fase2', rand());
// }).then(fase => {
//     console.log(fase);
//     return esperaAi('fase3', rand());
// }).then((fase)=>{
//     console.log(fase);
// }).catch(e => console.log(e));

async function executa(){
    try{
        const fase1 =  await esperaAi('fase1', rand());
        console.log(fase1);
        const fase2 =  await esperaAi(3, rand());
        console.log(fase2);
        const fase3 =  await esperaAi('fase3', rand());
        console.log(fase3);
    }catch(err){
        console.log(err);
    }
}
executa();
// await -> 'espera' a execução seria o 'then()'
/*
estados das Promises
pending -> pendente
fullfilled -> resolvida
rejected -> rejeitada
*/

const teste2 = esperaAi('SAKDOA', 50000);// vai estar como pendente pois não foi 'esperado para que ela termine'
console.log(teste2)