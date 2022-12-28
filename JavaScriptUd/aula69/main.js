//aula sobre manipulando prototype
var objA = {
    chave: 'a'
}

var objb = {
    chave: 'b'
}
//acessando a chave de A pelo proto do objeto B
Object.setPrototypeOf(objb, objA);
console.log(objb.chave); 