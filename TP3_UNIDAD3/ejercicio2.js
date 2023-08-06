/* Ejercicio 2
Escribe una función que tome un array de números como parámetro y devuelva un nuevo array con los números ordenados de forma ascendente. */
function array_asc(arreglo){
    let tam = arreglo.length;
    for (let i = 0; i < tam-1;i++){
        for (let j = 0; j< tam-1-i;j++){
            if(arreglo[j]>arreglo[j+1]){
                let aux = arreglo[j]
                arreglo[j] = arreglo[j+1]
                arreglo[j+1] = aux
            }
        }
    }
    return arreglo;
};

let mi_array = [5,6,3,2,1,4]

//console.log(mi_array.sort())

console.log(array_asc(mi_array))