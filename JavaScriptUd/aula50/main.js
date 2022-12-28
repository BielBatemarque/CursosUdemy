//aula sobre funções de callback
// callback -> funções anonimas usadas para dar uma ordem a execução das funções
//quando uma termina de ocorrer chama a próxima
function rand(min = 1000, max= 3000){
    const num = Math.random()* (max - min) + min;
    return Math.floor(num);
}
console.log(rand());
function f1(callback){
    setTimeout(function(){ //timeout simulando algo que demoraria na web
        console.log('f1');
        if(callback)callback();
    },rand());
}

function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if(callback)callback();
    },rand());
}

function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if(callback)callback();
    },rand());
}
f1(function(){
    f2(function(){
        f3(function(){
            console.log('ola mundo');
        });
    });
});
