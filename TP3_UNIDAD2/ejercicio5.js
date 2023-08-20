/* Ejercicio 5
Escribe una función que tome un número como parámetro y calcule la suma de todos los números primos menores o iguales a ese número. */

function primos(num){
    let suma_primos = 0
    for(let i=2;i<=num;i++){
        let pd=2;
        while(pd<=i/2 &&  i%pd!=0){
            pd+=1
        }
        if(pd>i/2){
            /* console.log(i) */
            suma_primos += i
        }
    }
    return suma_primos;
}

console.log(primos(10));