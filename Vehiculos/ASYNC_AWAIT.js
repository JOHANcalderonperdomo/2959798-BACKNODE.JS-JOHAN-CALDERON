const readline = require("readline");
const vh = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerNumero() {
    return new Promise((resolve, reject) => {
        vh.question("Ingrese el número: ", (respuesta) => {
            const numero = parseFloat(respuesta);
            if (!isNaN(numero)) {
                resolve(numero);
            } else {
                reject("¡Debe ingresar un número válido!");
            }
        });
    });
}

function esPar(numero) {
    return new Promise((resolve, reject) => {
        const resultado = numero % 2 === 0;
        resolve(resultado);
    });
}

function mostrarResultado(resultado) {
    if (resultado) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}

async function main() {
    try {
        // Obtener el número ingresado por el usuario
        const numero = await obtenerNumero();

        // Verificar si el número es par
        const esNumeroPar = await esPar(numero);

        // Mostrar el resultado
        mostrarResultado(esNumeroPar);
        
        // Crear una nueva Promise simulando una operación asincrónica
        const miPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const exito = true;
                if (exito) { 
                    resolve("¡Operación exitosa!");
                } else { 
                    reject("¡Operación fallida!");
                }
            }, 2000); 
        });

        // Usar async/await para esperar la resolución de la Promise
        const mensaje = await miPromise;
        console.log(mensaje); // Imprimir el mensaje
    } catch (error) {
        console.error(error); // Manejar errores
    } finally {
        vh.close(); // Cerrar la interfaz readline
    }
}

// Llamar a la función principal
main();
