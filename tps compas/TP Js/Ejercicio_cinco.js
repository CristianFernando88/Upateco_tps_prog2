function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
  
    if (numero % 2 === 0 || numero % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  function sumaPrimosMenoresOIguales(numero) {
    let suma = 0;
  
    for (let i = 2; i <= numero; i++) {
      if (esPrimo(i)) {
        suma += i;
      }
    }
  
    return suma;
  }
  
  // Ejercicio 5:Escribe una función que tome un número como parámetro y calcule la suma de todos los 
  // números primos menores o iguales a ese número.

  const numero = 20;
  const sumaPrimos = sumaPrimosMenoresOIguales(numero);
  console.log(`La suma de los números primos menores o iguales a ${numero} es: ${sumaPrimos}`);
  