const elementos = [
    {tag: 'p', texto:'frase1 '},
    {tag: 'div', texto:'frase2 '},
    {tag: 'footer', texto:'frase3 '},
    {tag: 'section', texto:'frase4 '},
];

var container = window.document.getElementById('container');
var div = document.createElement('div');

for(var i = 0; i<elementos.length; i++){
var {tag, texto} = elementos[i];
   var tagCriada = document.createElement(tag);
   tagCriada.innerHTML = texto;
   div.appendChild(tagCriada);
}
container.appendChild(div);