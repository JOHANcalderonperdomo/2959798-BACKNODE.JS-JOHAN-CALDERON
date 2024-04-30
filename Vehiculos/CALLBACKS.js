const readline = require("readline");
const vh = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

vh.question("Ingrese el número: ", (respuesta) => {
    const numero = parseFloat(respuesta);
    esPar(numero, mostrarResultado);
    vh.close();
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
