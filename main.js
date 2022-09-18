
let rol = prompt("Ingrese su rol en la empresa para saber su pago." + "\n" +
                 "Ingrese P si es empleado de planta." + "\n" + 
                 "Ingrese A si es empleado administrativo.");
    if (rol === "P" ) { 
        let hortrab = Number(prompt("Ingrese las horas que trabajó"));
        let hora = 20.000;
        let sueldo =  hortrab * hora;
            alert("Su sueldo por ser empleado de planta y trabajar " + hortrab + " horas es de: $" + sueldo + " mil pesos" ); 
    }
    else if(rol === "A") {  
        let hortrab = Number(prompt("Ingrese las horas que trabajó"));
        let hora = 10.000;
        let sueldo =  hortrab * hora;
            alert("Su sueldo por ser empleado administrativo y trabajar " + hortrab + " horas es de: $" + sueldo + " mil pesos");

    }


    
