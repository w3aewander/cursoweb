document.addEventListener('DOMContentLoaded', (evt) => {

    window.addEventListener("scroll", function () {
        var content = document.getElementById('body');
        var contentTop = content.offsetTop;
        var contentHeight = content.offsetHeight;
        var windowHeight = window.innerHeight;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        var scrollPosition = scrollTop + windowHeight;
        
        if (scrollPosition > contentTop && scrollTop < contentTop + contentHeight) {
          content.classList.remove('fade-out');
        } else {
          content.classList.add('fade-out');
        }
    });
     
// Selecione todos os elementos âncora que têm um atributo "href" iniciado com "#" (para destinos internos)
const elementosAncora = document.querySelectorAll('a[href^="#"]');

// Adicione o evento de clique a cada elemento âncora
elementosAncora.forEach(function(elemento) {
  elemento.addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
        
    executarSeq(); 
    
    }

    async function executarSeq() {
        await irParaDestino();
        await tornarBodyVisivel();
    };

    async function irParaDestino() {
        document.body.style.visibility = 'hidden';
        setTimeout( () => destino.scrollIntoView({ behavior: "smooth" }), 100);

    }

    async function tornarBodyVisivel(){
        setTimeout( () => {
        document.body.style.visibility = 'visible';
        }, 490 );
    }

  });

});


})

// sobe para topo da página
function subir() {
    scrollTo(0, 0);
}

function toggleBodyVisibility() {
    var body = document.querySelector('body');
    body.classList.toggle('visible');
  }