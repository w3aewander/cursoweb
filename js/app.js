document.addEventListener('DOMContentLoaded', (evt) => {

    // window.addEventListener("scroll", function () {
    //     const cards = document.querySelector("div");
    //     cards.forEach(element => {
    //         element.scrollIntoView({ behavior: "smooth" });
    //     });
    // });
// Selecione todos os elementos âncora que têm um atributo "href" iniciado com "#" (para destinos internos)
const elementosAncora = document.querySelectorAll('a[href^="#"]');

// Adicione o evento de clique a cada elemento âncora
elementosAncora.forEach(function(elemento) {
  elemento.addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    document.body.style.visibility = 'hidden';

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
      
      setTimeout( ()=> {document.body.style.visibility = 'visible'},500 )
    }


    

  });
});


})

// sobe para topo da página
function subir() {
    scrollTo(0, 0);
}