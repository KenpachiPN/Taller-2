
let pago = Number(prompt("Ingrese el dinero que pagó el restaurante"));
    if (pago > 130 ) { 
        let descuento = pago * 0.15;
        let pagototal   = pago - descuento;
            alert("El restaurante Don Camarón recibió un descuento del 15% por compras mayores a $130 mil pesos. " + "\n" +
                  "Así que en total deberá pagar: $" + pagototal+ " mil pesos." );
    }
    else {  
            alert("El restaurante Don Camarón debe pagar: $" + pago + " mil pesos.");
    }


    
