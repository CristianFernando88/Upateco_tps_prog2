const agregarColumna=(padre,valor,columnaInfo=true)=>{
    let nodo;
    if(columnaInfo){
       nodo = document.createElement("td");   
    }
    else{
       nodo = document.createElement("th");      
    }
    nodo.textContent=valor
    padre.appendChild(nodo)
}
const creacionTabla=()=>{
    let cuerpo=document.getElementsByTagName("body")[0]
    let tabla=document.createElement("table");
    let cabecera=document.createElement("tr");
    cuerpo.appendChild(tabla);
    tabla.appendChild(cabecera)
    tabla.setAttribute("id","tabla")
    tabla.setAttribute("border","1")
    agregarColumna(cabecera,"Nombre",false)
    agregarColumna(cabecera,"Apellido",false)
    agregarColumna(cabecera,"Email",false)
    agregarColumna(cabecera,"Nombre de la Empresa",false)
    agregarColumna(cabecera,"Direccion de la Empresa",false)    
}
const llenarTabla=objJs=>{
    let tabla=document.getElementById("tabla")
    let nuevaFila=document.createElement("tr")
    let nombreApellido=objJs.name.split(" ")
    tabla.appendChild(nuevaFila)
    if(nombreApellido.length>2){
        agregarColumna(nuevaFila,nombreApellido[0] + " " +  nombreApellido[1])
        agregarColumna(nuevaFila,nombreApellido[nombreApellido.length-1])
    }
    else{
        agregarColumna(nuevaFila,nombreApellido[0])
        agregarColumna(nuevaFila,nombreApellido[1])
    }    
    agregarColumna(nuevaFila,objJs.email)
    agregarColumna(nuevaFila,objJs.company.name)
    agregarColumna(nuevaFila,objJs.address.street)    
}
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
    if(response.status==200){
        return response.json();
    }
    else{
        throw new Error("Se produjo un error en la respuesta")
    }
})
.then(resultado=>{
    console.log(resultado)
    console.log(typeof(resultado))
    resultado.forEach(persona => {
        llenarTabla(persona)
    });
})
.catch(error=>console.log("Error:", error))
creacionTabla();