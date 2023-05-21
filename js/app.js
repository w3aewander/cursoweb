document.addEventListener('DOMContentLoaded', (evt)=>{

    const conteudo = document.getElementById('conteudo')

    document.querySelectorAll('a')
        .forEach( (elm)=>{
        elm.addEventListener('click', (e)=>{
            e.preventDefault();
            //alert(e.target)
            fetch(`${e.target}.html` )
            .then(resp=>resp.text())
            .then(resp=>conteudo.innerHTML = resp)
        })
    })
})


