
     //! Objetos y arrays
     const cliente = {
        nombre: prompt("Ingrese su nombre").toLowerCase(),
        apellido: prompt("Ingrese su apellido").toLowerCase(),
    };

    const producto = {
        precioOriginal: 100,
    };

    const descuentos = [
        { palabraClave: "descuento10", porcentaje: 10 },
        { palabraClave: "descuento20", porcentaje: 20 },
    ];

    //! Saludo al cliente
    const saludar = (cliente) => {
        const saludo = `Hola, ${cliente.nombre} ${cliente.apellido}!`;
        alert(saludo);
        console.log(saludo);
        document.getElementById("titulo").innerText = saludo;
    };
    saludar(cliente);

    //! Funciones de orden superior
    const aplicarDescuento = (precio, porcentaje) => precio - (precio * porcentaje / 100);

    //! Aplicar descuento si adivina la palabra clave
    let intentos = 2;

    while (intentos > 0) {
        let palabraClave = prompt("Ingresa la palabra clave para obtener el descuento").toLowerCase();
        console.log(`Intento con la palabra clave: ${palabraClave}`);

        const descuentoEncontrado = descuentos.find(descuento => descuento.palabraClave === palabraClave);

        if (descuentoEncontrado) {
            const precioConDescuento = aplicarDescuento(producto.precioOriginal, descuentoEncontrado.porcentaje);
            const mensajeDescuento = `Felicidades, ${cliente.nombre}, ganaste un descuento del ${descuentoEncontrado.porcentaje}%`;
            alert(mensajeDescuento);
            console.log(mensajeDescuento);
            console.log(`Tu producto queda en: $${precioConDescuento}`);
            document.getElementById("resultado").innerText = `Tu producto queda en: $${precioConDescuento}`;
            break; // Sale del bucle si la palabra clave es correcta
        } else {
            intentos--; // Resta un intento
            if (intentos > 0) {
                const mensajeError = `Palabra clave incorrecta. Te quedan ${intentos} intentos.`;
                alert(mensajeError);
                console.log(mensajeError);
            } else {
                const mensajeSinIntentos = "Se acabaron tus intentos. Mejor suerte la próxima vez.";
                alert(mensajeSinIntentos);
                console.log(mensajeSinIntentos);
                document.getElementById("resultado").innerText = mensajeSinIntentos;
            }
        }
    }