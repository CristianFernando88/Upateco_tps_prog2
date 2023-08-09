function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
    return true;
  }
  
  function sumaNumerosPrimosMenoresOIguales(numero) {
    let suma = 0;
    for (let i = 2; i <= numero; i++) {
      if (esPrimo(i)) {
        suma += i;
      }
    }
    return suma;
  }
  
  // Ejemplo de uso
  console.log(sumaNumerosPrimosMenoresOIguales(10)); // Resultado: 17 (2 + 3 + 5 + 7)
  