/* Ejercicio 4
Encontrar el número más grande en un Array. */


mi_vector = [8,4,51,23,47,1,2,3,11,17];


function array_mayor(arreglo){
    let existe_mayor = false;
    let mayor;
    for(let i=0;i<arreglo.length;i++){
        if(existe_mayor){
            if(arreglo[i]>mayor){
                mayor = arreglo[i];
            }
        }else{
            mayor = arreglo[i];
            existe_mayor = true;
        }
    }
    return mayor;
}

console.log(array_mayor(mi_vector))