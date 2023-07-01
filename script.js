//1

function ParImpar(numero) {
    if (numero % 2) {
      console.log("Número par");
    } else {
      console.log("Número impar");
    }
  }

ParImpar(20);

//2

function Comparar(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
      console.log(num2 + " es mayor que " + num1);
    } else {
      console.log("Los números son iguales");
    }
  }

  Comparar(2, 7);

  //3

  function Multiplo5(numero) {
    if (numero % 5) {
      console.log(numero + " es múltiplo de 5");
    } else {
      console.log(numero + " no es múltiplo de 5");
    }
  }

  Multiplo5(41);

  //4
  function parametro(array) {
    for (let i = 0; i < array.length; i++) {
      const numero = array[i];
      for (let j = 0; j <= numero; j++) {
        console.log(j);
      }
    }
  }
  
  parametro([ 0, 12]);

  //5
  function Palabra(palabra, numero) {
    for (let i = 0; i < numero; i++) {
      console.log(palabra);
    }
  }
  
  Palabra("Script", 5);

  //6

  function valores(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  valores([300, 51, 28, 10, 128]);

  //7
  function NoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
      if (i == 4) {
        continue;
      }
      console.log(array[i]);
    }
  }
  
  const numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  NoQuinto(numeros);

  //8
  function multiplicar(array, number) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * number);      
    }
  }
  
  multiplicar([10,20,30], 2)
