//metodos uteis para objetos
/*
object.values -> mostra o valor
object.entries -> /mostra as chaves e os valores delas em forma de arrays
object.getOwnPropertyDescriptor -> mostra as propiedades de uma chave
Object.assign -> 
...(spread)

Object.keys -> mostra as chaves do objeto
Object.freeze -> trava o objeto
Object.defineProperties (define varias propiedades)
Object.defineProperty -> define uma propiedade

*/
var produto ={ nome:'caneca', preco:1.80};
var outraCoisa = {...produto, materia:'porcelana'};//utilizando o spreed operator os dois tem o mesmo conteudo mas não apontam para o mesmo lugar da memoria
var caneca = Object.assign({}, produto, {maretia: 'porcelana'});//copia tudo que tem dentro de produto dentro do obj vazio
Object.freeze(produto)//trava o objeto
produto.nome = 'Luiz otavio'
console.log(outraCoisa);
console.log(produto);