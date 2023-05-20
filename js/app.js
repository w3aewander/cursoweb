document.addEventListener('DOMContentLoaded', (evt)=>{

    document.querySelectorAll('a')
        .forEach( (elm)=>{
        elm.addEventListener('click', (e)=>{
            e.preventDefault()
        })
    })
    const conteudo = document.getElementById('conteudo')
    
    carregarHtml(`${"_home"}`);
  
})

const carregarHtml = (pagina) => {
    fetch(`./${pagina}.html`)
    .then( resp => resp.text())
    .then( resp => conteudo.innerHTML = resp)   
}