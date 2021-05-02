for (let pregunta of document.getElementsByClassName("expandible")) {
    let respuesta = pregunta.getElementsByClassName("oculto")[0];
    pregunta.onclick = function() {
        respuesta.classList.toggle("oculto");
    };
}

