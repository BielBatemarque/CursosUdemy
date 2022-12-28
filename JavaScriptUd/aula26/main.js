//Aula sob re operações ternárias
// ? :  substitui ifs
// (condição) ? 'valor para verdadeuri' : 'valor para falso';
const pont = 1001;
var usuario = pont >= 1000? 'usuario vipp' : 'usuario normal';
console.log(usuario);

var corUsuario = null;
var corP = corUsuario || 'preta';

console.log(usuario, corP)



//  if(pont>999){
//     console.log('usurario Vip');
//  } else{
//     console.log('usuario normal')
//  }