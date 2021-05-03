for (let pregunta of document.getElementsByClassName("expandible")) {
    let respuesta = pregunta.querySelector("div.oculto");
    pregunta.onclick = function() {
        // respuesta.classList.toggle("oculto");
        $(respuesta).slideToggle();
    };
}