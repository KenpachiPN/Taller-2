
let elegirfigu = prompt("A qué figura le desea calcular el área: " + "\n" + 
                        "¿Triangulo o Cirulo?" + "\n" +
                        "Escriba T para Triangulo." + "\n" + 
                        "Escriba C para Circulo.");
    if (elegirfigu === "T") {  
        let base = Number(prompt("Ingrese la base del triangulo"));
        let altura = Number(prompt("Ingrese la altura del triangulo"));
        let areaTr =  base * altura / 2;
            alert("El área del triangulo es de " + areaTr);
    }
    else if (elegirfigu === "C") {  
        let radio = Number(prompt("Ingrese el radio del circulo"));
        let areaCir =  Math.PI * radio * radio;
            alert("El área del circulo es de " + areaCir);
    }


    
