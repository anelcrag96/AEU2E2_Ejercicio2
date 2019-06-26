var ejercicio=require("./cadena");

//const cadena="anita lava la tina";
//const cadena="somos o no somos";
//const cadena="acaso hubo buhos aca";
//const cadena="sé verlas al revés";
const cadena="la ruta nos aporto otro paso natural";
console.log("Cadena: "+cadena);

var palindromos=ejercicio.palindromo(cadena);
console.log("Palindromo: "+palindromos);

var contarPalabras=ejercicio.numeropalabras(cadena);
console.log("Número de palabras: "+contarPalabras);

var contarLetras=ejercicio.numeroletras(cadena);
console.log("Número de letras: "+contarLetras);

var contarVocales=ejercicio.numerovocales(cadena);
console.log("Número de vocales: "+contarVocales);

var contarConsonantes=ejercicio.numeroconsonantes(cadena);
console.log("Número de consonantes: "+contarConsonantes);