var Num1=0;
var Suma=0;

do{
    Suma += Num1;
    Num1 = parseFloat(prompt("Ingresa un Número"));

    if( isNaN(Num1) ){
        alert("No es un número");    
    }      

}while(Num1);    
    
 document.write(Suma);
