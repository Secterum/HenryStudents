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
//solo restaria intentar hacerlo usando mi propia logica para llegar al resultado

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}