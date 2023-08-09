let botonEnviar=document.getElementById("boton");
let contenedorDeMensajes=document.getElementsByClassName("chatbot-mensajes")[0];
botonEnviar.addEventListener('click',()=>{
    let contenidoCajaTexto=document.getElementById("caja-texto").value;
    if(contenidoCajaTexto.length>0){
        let nuevoMensaje=document.createElement('div');
        nuevoMensaje.textContent=contenidoCajaTexto;
        nuevoMensaje.classList.add('mensajes');
        contenedorDeMensajes.appendChild(nuevoMensaje);
        document.getElementById("caja-texto").value=""
    }   
})