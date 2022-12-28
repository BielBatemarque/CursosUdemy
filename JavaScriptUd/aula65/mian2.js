function Produto(nome, preco, estoque){
    Object.defineProperties(this, {
        nome:{
            enumerable : true,
            value : estoque,
            writable:true,
            configurable:true,
        },
        preco:{
            enumerable : true,
            value : estoque,
            writable:true,
            configurable:true,
        },
        estoque: {
            enumerable : true,
            value : estoque,
            writable:true,
            configurable:true, 
        }
    })
}

    var produto1 = new Produto('calça',50, 4);
    console.log(produto1);