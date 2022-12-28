// aula sobre estrutura de repetição for

//  for (var i = 0; i<=100;i += 10){
//      console.log(`linha a ${i}`);
//  }

// //for correndo para tras

// for ( var i = 500; i>=400; i--){
//     console.log(`linha a ${i}`);
// }

for(var i = 0; i<=10; i++){
    var par = i%2 ==0 ?'par' : 'impar' 
    console.log(i, par);
} 
var frutas = ['maçã', 'pera', 'uva','morango'];
for(i = 0; i<frutas.length; i++){
    console.log(frutas[i]);
}