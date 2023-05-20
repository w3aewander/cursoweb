document.addEventListener('DOMContentLoaded', (evt)=>{

    const conteudo = document.getElementById('conteudo')
    
    carregarHtml(`${"_home"}.html`);
  
})

const carregarHtml = (pagina) => {
    fetch(pagina)
    .then( resp => resp.text())
    .then( resp => conteudo.innerHTML = resp)   
}