function ordenarAscendente(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  // Ejemplo de uso
  const numeros = [5, 2, 8, 1, 3];
  const numerosOrdenados = ordenarAscendente(numeros);
  console.log(numerosOrdenados); // Resultado: [1, 2, 3, 5, 8]
  