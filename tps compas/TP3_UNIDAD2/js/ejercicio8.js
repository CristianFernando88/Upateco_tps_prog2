const persona={
    nombre:"Mauricio",
    apellido:"Mamaní",
    edad:23,
    sexo:"Masculino",
    telefono:"3874525660"
}
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
    agregarColumna(cabecera,"Edad",false)
    agregarColumna(cabecera,"Sexo",false)
    agregarColumna(cabecera,"Telefono",false)    
}
const llenarTabla=objJs=>{
    let tabla=document.getElementById("tabla")
    let nuevaFila=document.createElement("tr")
    tabla.appendChild(nuevaFila)
    agregarColumna(nuevaFila,objJs.nombre)
    agregarColumna(nuevaFila,objJs.apellido)
    agregarColumna(nuevaFila,objJs.edad)
    agregarColumna(nuevaFila,objJs.sexo)
    agregarColumna(nuevaFila,objJs.telefono)    
}
creacionTabla();
llenarTabla(persona)