var cadena;
var texto="";

cadena = prompt("Ingresa una cadena");
while(cadena){
     texto += cadena + " - ";
    //document.write(texto);
     cadena = prompt("Ingresa una cadena");
 }
 document.write(texto);
