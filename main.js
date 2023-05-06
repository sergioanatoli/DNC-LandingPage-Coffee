
function  ocultarAnuncio() { 
    var elAnuncio = document.getElementById("anuncio");
    elAnuncio.style.display = "none";
  }

function  abrirAnuncio() { 
  var elAnuncio = document.getElementById("anuncio");
  elAnuncio.style.display = "block";
}


var navegadorPrincipal = document.querySelector("a");
navegadorPrincipal.addEventListener("click", abrirAnuncio);

