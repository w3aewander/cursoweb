document.addEventListener('DOMContentLoaded', (evt)=>{

    const conteudo = document.getElementById('conteudo')

    document.querySelectorAll('a')
        .forEach( (elm)=>{
        elm.addEventListener('click', (e)=>{
            e.preventDefault();
 
            carregarPagina(e.target);
        })
    })

    carregarPagina('_home')
})

const carregarPagina = (pagina) => {
    fetch(`${pagina}` )
            .then(resp=>resp.text())
            .then(resp=>conteudo.innerHTML = resp)
}