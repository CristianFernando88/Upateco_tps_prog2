/* Ejercicio 3
Crear un vector de números con al menos 10 elementos, filtrar todos los números pares e insertarlo dentro de un elemento HTML. */

mi_vector = [8,4,51,23,47,1,2,3,11,17];

let pares = mi_vector.filter((elemento)=> elemento%2===0)

console.log(pares)

let itemsO = ""
for (let i=0;i<mi_vector.length;i++){
    itemsO +="<li>"+mi_vector[i]+"</li>\n"; 
}

let items = ""
for (let i=0;i<pares.length;i++){
    items +="<li>"+pares[i]+"</li>\n"; 
}

let lista_original = document.getElementById("lista-original");
lista_original.innerHTML = itemsO;
console.log(items)
let lista = document.getElementById("lista-pares");
lista.innerHTML = items;
console.log(items)