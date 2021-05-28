$(function () {
    
    var r=["rotate(180deg)","rotate(90deg)"]
    
    for (let pregunta of document.getElementsByClassName("expandible")) {
        let respuesta = pregunta.querySelector("div.oculto");
        let masMenos = pregunta.querySelector("p.masMenos")
        pregunta.onclick = function() {
            // respuesta.classList.toggle("oculto");
            $(respuesta).slideToggle();
            if( masMenos.innerHTML=="+"){
                masMenos.innerHTML="-";
                masMenos.style.transition="all .5s"
                masMenos.style.transform=r[0];
            }else{
                masMenos.innerHTML="+";
                masMenos.style.transition="all .5s"
                masMenos.style.transform=r[1];

            }
        };
    }
    
    
    $('#myDiv').floatingWhatsApp({
        phone: '523781080994',
        popupMessage: '¿En qué podemos ayudarte?',
        message: "",
        showPopup: true,
        showOnIE: false,
        headerTitle: 'Contacto vía WhatsApp',
        position: "right"
    });
});