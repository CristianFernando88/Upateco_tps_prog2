const mensaje = document.getElementById("mensaje");
const chat = document.querySelector(".message-box");
const btn_enviar = document.getElementById("boton_enviar");
btn_enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    let msn_elemento = document.createElement("p");
    if(mensaje.value!=""){
        msn_elemento.setAttribute("class","chat-enviado");
        msn_elemento.textContent = mensaje.value;
        chat.appendChild(msn_elemento);
    }
    mensaje.value = "";
})
console.log("estamos en js")