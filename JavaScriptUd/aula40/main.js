//exercicio fizz buzz de logica de programação

function verifica(n){
    if(n%3 == 0 && n%5==0){
        return 'fizzBuzz';
    }else if(n%5 == 0){
        return 'buzz';
    }else if(n%3 == 0 ){
        return 'Fizz';
    }else{
        return n;
    }
}   
    for(var i = 0; i<100; i++){
        console.log(i, verifica(i));
    }