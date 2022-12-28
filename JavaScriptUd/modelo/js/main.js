var txt1 = window.document.querySelector('.txt1');
var btn1 = window.document.querySelector('.btn1');
var list = window.document.querySelector('.tarefsa')

btn1.addEventListener('click', function(){
    if(!txt1.value){
        console.log(txt1.value);
    }
});
