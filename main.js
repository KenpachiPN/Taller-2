
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));
let num3 = Number(prompt("Ingrese el tercer número"));    
    if (num1 > num2 && num1 > num3) {  
        alert("El número " + num1 + " es mayor qué " + num2 + " y " + num3 );
    }
    else if(num1 < num2 && num1 < num3) {
        alert("El número " + num1 + " es menor qué " + num2 + " y " + num3);
    }   
    else if (num1 === num2 && num1 === num3) {      
        alert("El número " + num1 + " es igual qué " + num2 + " y " + num3 );
    }

    else if(num2 > num1 && num2 > num3) {
        alert("El número " + num2 + " es mayor qué " + num1 + " y " + num3);
    }   
    else if(num3 > num1 && num3 > num2) {
        alert("El número " + num3 + " es mayor qué " + num1 + " y " + num2);  
    }


    
