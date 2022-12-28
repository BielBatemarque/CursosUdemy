var txt1 = window.document.querySelector('.txt1');
var btn1 = window.document.querySelector('.btn1');
var list = window.document.querySelector('.tarefas')

function criaLi(){
    var li = document.createElement('li');
    return li;
}
    txt1.addEventListener('keypress', function(e){
       if(e.keyCode ===13){
        if(!txt1.value) return;
        criaTarefa(txt1.value);
    }
});

function limpInput(){
    txt1.value = '';
    txt1.focus();
}

    function criaPotaoApagar(li){
        li.innerHTML += ' ';
        var botaoApagar = document.createElement('button');
            botaoApagar.textContent = 'apagar';
            botaoApagar.setAttribute('class','apagar')
         li.appendChild(botaoApagar);   
    }

function criaTarefa(texto){
    const item = criaLi();
    item.innerHTML = texto;
    list.appendChild(item);
    limpInput();
    criaPotaoApagar(item);
    salvarTarefa();
}

btn1.addEventListener('click', function(){
        if(!txt1.value) return;
    criaTarefa(txt1.value);
   
});

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefa();
    }
})

function salvarTarefa(){
    const liTarefas = list.querySelectorAll('li');
    const listaDeTarefas = [];

    for(var tarefa of liTarefas){
       var tarefaTexto = tarefa.innerText;
       tarefaTexto = tarefaTexto.replace('apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);//convertido para JSON para salvar no localStorage
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas'); //localStorage -> utilizado para salvar informações em um espaço dentro do navegador, assim se fecha-lo ou refrashar a pagina não se perde os dados
    const listaDeTarefas = JSON.parse(tarefas);
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas();