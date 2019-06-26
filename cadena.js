/*
    Integrantes bina:                   No. Control:
        Ángel Eliezer Cruz Aguilar          14400928
        Román Rivera Navarrete              15401048
    Horario: 08:00 am - 11:00 am

    Ejercicio No.2
    Descripción: 
    Desarrollar en JavaScript utilizando require y module.exports, un programa que haga lo siguiente:
        - Recibe una cadena
            - Verifica si es palíndromo
            - Cuenta el número de palabras en la cadena
            - Cuenta el número de letras (sin espacios)
            - Cuenta el número de vocales
            - Cuenta el número de consonantes
        - Imprime toda la información anterior en consola
*/

function Palindromo(cadena){
    
    var cadena=cadena.replace(/ /g,"");
    for (var i=0; i<cadena.length; i++){
        if(cadena[i]!=cadena[cadena.length-i-1]){
            return "No es palindromo";
        }//if
    }//for
    return "Es palindromo";
}//Palindromo

module.exports.palindromo=Palindromo;

function NumeroPalabrasCadena(cadena){
    cadena=cadena.replace(/\r?g\n/g," ");
    cadena=cadena.replace(/[]+/g," ");
    cadena=cadena.replace(/^/g,"");
    cadena=cadena.replace(/$/g,"");
    var trozo=cadena.split(" ");
    var nopalabras=trozo.length;
    return nopalabras;
}//NumeroPalabrasCadena

module.exports.numeropalabras=NumeroPalabrasCadena;

function NumeroLetras(cadena){
    var cadena=cadena.replace(/ /g,"");//Eliminar espacios en blanco
    var numero=cadena.length;
    return numero;
}//NumeroLetras

module.exports.numeroletras=NumeroLetras;

function NumeroVocales(cadena){
    var arreglo=cadena.match(/[aeiou]/g);
    return arreglo.length;
}//NumeroVocales

module.exports.numerovocales=NumeroVocales;

function NumeroConsonantes(cadena){
    var arreglo=cadena.match(/[bcdfghjklmnñpqrstvwxyz]/g);
    return arreglo.length;
}//NumeroConsonanates

module.exports.numeroconsonantes=NumeroConsonantes;