const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese el primer número: ', (num1) => {
    readline.question('Ingrese el segundo número: ', (num2) => {
        // Llamar a la función para sumar los números ingresados
        sumarNumeros(parseFloat(num1), parseFloat(num2), mostrarResultado);
        readline.close();
    });
});

function sumarNumeros(num1, num2, callback) {
    
    const suma = num1 + num2;
    
    callback(suma);
}

// Función de callback para mostrar el resultado
function mostrarResultado(resultado) {
    console.log("El resultado de la suma es:", resultado);
}