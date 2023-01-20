//aula sobre ajax -> asyncono javaScriptXLM
//requisições asyncronas
// modelo antigo usando callback
const request = (obj) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);// trabalhando com get
    xhr.send();

    xhr.addEventListener('load', () => {
         if(xhr.status >= 200 && xhr.status < 300 ){
            obj.success(xhr.responseText);
         }else{
            obj.error( xhr.statusText);
         }
    });
}

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

function carregaPagina(el){
    const href = el.getAttribute('href');
    //console.log(href);
        const objConfig = {
       method: 'GET',
       url: href,
       success(response){
        carregaResultado(response);
       },
       error(errorText){
        console.log(errorText)
       }
    };
    request(objConfig);
}
function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}