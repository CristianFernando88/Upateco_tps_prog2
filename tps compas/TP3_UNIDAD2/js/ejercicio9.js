let formularioHTML=document.getElementById("formulario")

formularioHTML.addEventListener('submit',(e)=>{
    let formulario=new FormData(formularioHTML);
    const nombre = formulario.get('nombre');
    console.log('Nombre:', nombre);
    const correo = formulario.get('correoE');
    console.log('Correo:', correo);    
    e.preventDefault();
})