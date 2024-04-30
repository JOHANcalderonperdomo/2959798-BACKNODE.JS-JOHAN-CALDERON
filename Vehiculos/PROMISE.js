const readline = require("readline");
const vh = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esPar(numero, callback) {
    const resultado = numero % 2 === 0;
    callback(resultado);
}

function mostrarResultado(resultado) {
    if (resultado) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}

vh.question("Ingrese el número: ", (respuesta) => {
    const numero = parseFloat(respuesta);
    esPar(numero, mostrarResultado);
    vh.close();

    
    const miPromise = new Promise((bien, mal) => {
        
        setTimeout(() => {
            const exito = true;
            if (exito) { 
                bien("¡Operación exitosa!");
            } else { 
                mal("¡Operación fallida!");
            }
        }, 2000); 
    });

    miPromise.then((mensaje) => {
        // Esta función se ejecutará cuando la Promise se cumpla (resolve)
        console.log(mensaje);
    }).catch((error) => {
        // Esta función se ejecutará si la Promise es rechazada (reject)
        console.error(error);
    });
});
