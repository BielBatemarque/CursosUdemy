//aula sobre fetch API e axios

//fetch('pessoas.json').then(resposta => resposta.json()).then(json => carregaElementosNaPagina(json));
axios('pessoas.json').then(resposta => carregaElementosNaPagina(resposta.data))

function carregaElementosNaPagina(json){
    const table = document.createElement('table');
    for(var pessoa of json){
        const tr = document.createElement('tr');

        var td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td)

         td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td)

     //   console.log(pessoa.nome);

        table.appendChild(tr);
    }

    const resltado = document.querySelector('.resultado');
    resltado.appendChild(table);



}