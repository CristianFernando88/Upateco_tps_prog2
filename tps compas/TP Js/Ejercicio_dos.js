function ordenarAscendente(arrayNumeros) {
    return arrayNumeros.sort((a, b) => a - b);
  }

  //Ejercicio 2: Escribe una función que tome un array de números como parámetro y devuelva un nuevo 
  //array con los números ordenados de forma ascendente.
  
  const numeros = [33, 1, 56, 62, 78,94];
  const numerosOrdenados = ordenarAscendente(numeros);
  console.log(numerosOrdenados); 
