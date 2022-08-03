'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
/*Dado un número entero (o número de JavaScript),
seguimos dividiendo el número por dos y capturando su resto hasta que el número se convierte en menos de 2.
Por ejemplo, si tenemos un número 25,
sigue dividiendo 25 por 2 hasta que obtengamos el cociente menor que 2.*/
/*let resul = 0
let numReverse = num.split('').reverse().join('')
for (let i = 0; i < numReverse.length; i++) {                   // ACA SE RESOLVIO SOLO CON LOGICA PROPIA.
    resul += +num[i] * 2 ** (num.length - 1 - i);
}
return resul;
}*/
//LUEGO COMENCE A BUSCAR FORMAS MAS ACOTADAS. Y ENCONTRE DIFERENTES POSIBILIDADES DEL parseInt entre ellas de resolver el ejercicio.
return parseInt(num, 2)
}



function DecimalABinario(num) {
  // tu codigo aca 
  return num.toString(2)
}
/*function D(num) {
  // tu codigo aca 
  var res = "";               // declara la variable
  while (num !== 0) {         // entra un bucle donde solo se rompe cuando num !==0 (no es estrictamente igual a 0)
    res = num % 2 + res;      // concatena el resto de num divido 2 a la variable res
    num = Math.floor(num / 2) //usa Math.floor para asegurarse de tener resultado int
  }
  return res}
console.log(D(13))*/
//solo restaria intentar hacerlo usando mi propia logica para llegar al resultado

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}