//aula sobre tratando e lançando erros try, catch e throw
// usados para fazer coisas "perigosas" no programa
// try -> tente, estutura parecida com if e else
//não é interessante lançar erros para o usurio final, por isso erros são tratados
// se ocorrer algum erro dentro do bloco try{} catch será executado
// try{
//     console.log(naoexisto);
// }catch(err){
//     console.log('naoexisto não existe');
//  // o erro fica salvo na variavel err do catch
//     console.log(err);
// }

function soma(x,y){
    if(typeof x !== 'number' || typeof y !=='number'){
        throw new Error('x e y precisam ser numeros');   
    }
    return x+y;
}
try{ 
    console.log(soma(1,2));
    console.log(soma('1',2));
}catch(error){
    //console.log(error);
    console.log('alguma coisa mais amigavel para o usuraio')
}