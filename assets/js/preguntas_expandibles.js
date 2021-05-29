$(function () {
    
    var objeto = {
        expan : document.querySelector(".expandible2"),
        modal : document.querySelector(".modal"),
        MasMenos : document.querySelector("p.MasMenos"),
        body : document.querySelector(".body"),
        oculto : document.querySelector(".oculto2"),
        cerrar : document.querySelector(".cerrar")
    };

    
    for (let pregunta of document.getElementsByClassName("expandible")) {
        let respuesta = pregunta.querySelector("div.oculto");
        let masMenos = pregunta.querySelector("p.masMenos")
        pregunta.onclick = function() {
            // respuesta.classList.toggle("oculto");
            $(respuesta).slideToggle();
            cambio(masMenos)
        };
    }
    //cambiar signos
    function cambio(masMenos){
        if( masMenos.innerHTML=="+"){
            masMenos.innerHTML="-";
            masMenos.style.transition="all .5s";
            masMenos.style.transform="rotate(180deg)";
        }else{
            masMenos.innerHTML="+";
            masMenos.style.transition="all .5s";
            masMenos.style.transform="rotate(90deg)";
        }
        
    }

    //Mostrar modal
    objeto.expan.onclick = function(){
        if(objeto.MasMenos.innerHTML=="+"){
            cambio(objeto.MasMenos);
        }
        objeto.oculto.style.display = "block";
		objeto.body.style.overflow = "hidden";
        objeto.body.style.position = "static";
        objeto.body.style.height = "100%";
        
    }

    //Ocultar modal
    objeto.cerrar.onclick = function() {
        if(objeto.MasMenos.innerHTML=="-"){
            cambio(objeto.MasMenos);
        }
        objeto.oculto.style.display ="none";
        objeto.body.style.overflow = "inherit";
        objeto.body.style.position = "auto";
        objeto.body.style.height = "visible";
    }

    //Ocultar modal si el target es el exterior de la imagen
    window.onclick = function(e) {
        if (e.target == objeto.modal) {
            if(objeto.MasMenos.innerHTML=="-"){
                cambio(objeto.MasMenos);
            }
            objeto.oculto.style.display ="none";
            objeto.body.style.overflow = "inherit";
            objeto.body.style.position = "auto";
            objeto.body.style.height = "visible";
        }
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