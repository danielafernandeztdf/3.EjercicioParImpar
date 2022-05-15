//Desarrollar un algoritmo que dado un número,
//ingresado por el usuario determine si el
//número es par o impar y le informe al usuario
//En el caso de ser 0 (cero) el algoritmo deberá
//informarlo

let numero = prompt("Indique un número:");
if (numero % 2 === 0) {
  console.log("El numero ingresado" + numero + " es par");
} else {
  console.log("El numero ingresado" + numero + " es impar");
}
