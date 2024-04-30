
//! Variables y saludo al cliente 

let nombre = prompt("Ingrese su nombre").toLowerCase();
let apellido = prompt("Ingrese su apellido").toLowerCase();
alert("Hola, " + nombre + " " + apellido + "!");


//! Aplicar descuento si adivina la palabra clave 


let intentos = 2;
while (intentos > 0) {
    let precioOriginal = 100;  //Se agrego este precio para poder aportar el descuento
    let palabraClave = prompt("Ingresa la palabra clave para obtener el descuento").toLowerCase();

    if (palabraClave === "descuento10") {
        let descuento = (precioOriginal * 10) / 100;
        let precioConDescuento = precioOriginal - descuento;
        alert("Felicidades, " + nombre + ", ganaste un descuento del 10%");
        console.log("Tu producto queda en: $" + precioConDescuento);
        break; // Sale del bucle mientras si la palabra clave es correcta
    } else {
        intentos--; // le resta un intento 
        if (intentos > 0) {
            alert("Palabra clave incorrecta. Te quedan " + intentos + " intentos.");
        } else {
            alert("Se acabaron tus intentos. Mejor suerte la próxima vez.");
        }
    }
}
