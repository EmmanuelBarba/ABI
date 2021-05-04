$(function () {
    
    
    for (let pregunta of document.getElementsByClassName("expandible")) {
        let respuesta = pregunta.querySelector("div.oculto");
        pregunta.onclick = function() {
        // respuesta.classList.toggle("oculto");
        $(respuesta).slideToggle();
        };
    }
    
    $('#myDiv').floatingWhatsApp({
        phone: '523781080994',
        popupMessage: 'En qué podemos ayudarte?',
        message: "",
        showPopup: true,
        showOnIE: false,
        headerTitle: 'Hola!',
        position: "right"
    });
});