function encontrarNumeroMasGrande(arr) {
    return Math.max(...arr);
  }
  
  // Ejercicio 4: Encontrar el número más grande en un Array.
  
  const numeros = [2, 5, 8, 11, 16, 23, 4, 7, 10, 9];
  const maximo = encontrarNumeroMasGrande(numeros);
  console.log(maximo); // Resultado: 23
  