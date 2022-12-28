var produto = {
    nome: 'produto',
    preco:1.80
}
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
//essa função mostra as propiedades da chave do objeto: value, writable ...
console.log(Object.values(produto));//exibe os valores das chaves do objeto
console.log(Object.entries(produto))//mostra as chaves e os valores delas em forma de arrays
for(var [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
    ;
}