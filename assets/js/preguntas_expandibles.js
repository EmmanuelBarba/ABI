let preguntas = document.getElementsByClassName("expandible");

for (preg of preguntas) {
    let resp = preg.getElementsByClassName("oculto")[0]

    preg.onclick = function() {
        if (resp.className == "oculto") {
            resp.className = "";
        } else {
            resp.className = "oculto";
        }
    };
}

