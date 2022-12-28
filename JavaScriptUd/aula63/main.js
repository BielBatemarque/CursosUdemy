//aula sobre forEach disponivel apenas em arrays
//apenas itera sobre o array, mas não 'faz nada' (se não mandar)
var a1 = [1,2,3,4,5,6,7];
a1.forEach(function(valor,indice,array){
    console.log(valor,indice, array);
}); 
var total = 0;
a1.forEach((valor)=>{
    total += valor;
});
console.log(total)