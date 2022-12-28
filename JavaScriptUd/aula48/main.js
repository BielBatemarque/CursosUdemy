//aula sobre escolpo léxico
//funções "lembram e usam seus vizinhos"

const nome = 'gabriel';
function falaNome(){
    const nome = 'batemarque'
    console.log(nome);
}
falaNome();

function usaFalaNome(){
    falaNome();
}
usaFalaNome();