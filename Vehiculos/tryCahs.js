const readline = require("readline");

const vh = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function dividir() {
    vh.question("Ingrese el primer número: ", (a) => {
        a = parseFloat(a);
        vh.question("Ingrese el segundo número: ", (b) => {
            b = parseFloat(b);
            
            try {
                // Verificamos si 'b' es cero
                if (b === 0) {
                    throw new Error("División por cero no permitida");
                }

                // Realizamos la división
                let resultado = a / b;

                // Mostramos el resultado
                console.log("El resultado de la división es:", resultado);
            } catch (error) {
                // Manejamos cualquier error que ocurra durante la ejecución
                console.error("Error:", error.message);
            } finally {
                // Cerramos la interfaz readline
                vh.close();
            }
        });
    });
}

// Llamamos a la función dividir
dividir();
