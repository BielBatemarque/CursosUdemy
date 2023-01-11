//aula sobre arrays(avançado)

var nomes = ['eduardo', 'maria', 'joão','rosana'];
//var nomes = new Array('eduardo', 'maria', 'joão');//funciona da mesma forma
nomes[2] = 'gabriel';
delete nomes[2];//remove o item do indice
var novo = [...nomes];
var elementoRemovido = novo.pop();// remove do final
var nomes1 = nomes.shift();//remove \do começo
nomes.push('marcos');//adiciona ao final do array
nomes.unshift('bruno');//adiciona no começo

var nommm = nomes.slice(1, 3);//"fatiar o array"

var n1 = 'gabrial santos batemarque de oliveira';

var name1 = n1.split(' ');//separa a string colocando suas palavras em array
var nome2 = name1.join(' ');//une os itens do para ser uma string
console.log(name1);